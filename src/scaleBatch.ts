import { ScaleBatchTypes } from '../types/scalebatchtypes'
import { ScaleBatchResult } from '../types/scalebatchresult'
import { weight } from './weight'
import { scaleToMaxWeight } from './scaletomaxweight'
import { ScaleToMaxWeightResult } from '../types/scaletomaxweightresult'

/**
 * Function to scale down and resize pictures to save memory.
 * 
 * @param targetWeight - The max limit that the picture can weigh.
 * @param images - An array of pictures. 
 * @returns The new scaled down pictures that is as big as it can be below the 
 * size-limit, along with the total memory saved in megabytes.
 */
export class scaleBatch {
  private images: ScaleBatchTypes['images'];
  private targetWeight: number;

  constructor(targetWeight: number, images: ScaleBatchTypes['images']) {
    if (!images || images.length < 1 || !Array.isArray(images)) {
      throw new Error('No images found');
    }
    this.images = images;
    this.targetWeight = targetWeight;
  }

  public run(): ScaleBatchResult {
    let totalMemory = 0
    for (const image of this.images) {
      const result = weight({ height: image.height, width: image.width, bytesPerPixel: image.bytesPerPixel })
      totalMemory += result.megabytes
    }

    const scaledImages: ScaleToMaxWeightResult[] = []
    for (const image of this.images) {
    const newImage = scaleToMaxWeight({ width: image.width, height: image.height, maxMegaBytes: targetWeight, bytesPerPixel: image.bytesPerPixel })
    scaledImages.push(newImage)
    }
    let scaledImagesMemory = 0
    for (const image of scaledImages) {
      const weighedScaledImages = weight({ height: image.height, width: image.width })
      scaledImagesMemory += weighedScaledImages.megabytes
    }
    const savedMemory = totalMemory - scaledImagesMemory

    return {
      images: scaledImages,
      savedMemory: savedMemory
    }
  }
}