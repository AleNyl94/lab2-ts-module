import { ScaleBatchResult } from '../types/scalebatchresult'
import { Weight } from './weight'
import { ScaleToMaxWeight } from './scaletomaxweight'
import { ScaleToMaxWeightResult } from '../types/scaletomaxweightresult'
import { ImageItem } from '../types/imageitem'
import { Validator } from './functions/validation'

/**
 * Function to scale down and resize pictures to save memory.
 * 
 * @param targetWeight - The max limit that the picture can weigh.
 * @param images - An array of pictures. 
 * @returns The new scaled down pictures that is as big as it can be below the 
 * size-limit, along with the total memory saved in megabytes.
 */
export class ScaleBatch {
  private validator: Validator
  private images: ImageItem[]
  private targetWeight: number
  p

  constructor(targetWeight: number, images: ImageItem[]) {
    this.validator = new Validator
    this.validator.validateArray(images)
    this.validator.validateTargetWeight(targetWeight)
    this.images = images;
    this.targetWeight = targetWeight;
  }

  public run(): ScaleBatchResult {
    const originalMemory = this.calculateOriginalMemory()
    const scaledImages = this.scaleAllImages()
    const scaledMemory = this.calculateScaledMemory(scaledImages)

    const savedMemory = Number((originalMemory - scaledMemory).toFixed(2))

    return {
      images: scaledImages,
      savedMemory
    }
  }

  private calculateOriginalMemory(): number {
    return this.images.reduce((total, image) => {
      const imageWeight = new Weight(image).run()
      return total + imageWeight.megabytes
    }, 0)
  }

  private scaleAllImages(): ScaleToMaxWeightResult[] {
    return this.images.map((image) =>
      new ScaleToMaxWeight(image, this.targetWeight).run()
    )
  }

  private calculateScaledMemory(scaledImages: ScaleToMaxWeightResult[]): number {
    return scaledImages.reduce((total, image) => total + image.megaBytes, 0)
  }
}