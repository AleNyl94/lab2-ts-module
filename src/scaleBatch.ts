import { ScaleBatchTypes } from '../types/scalebatchtypes'
import { ScaleBatchResult } from '../types/scalebatchresult'
import { weight } from './weight'
import { scaleToMaxWeight } from './scaletomaxweight'
import { ScaleToMaxWeightResult } from '../types/scaletomaxweightresult'

export function scaleBatch({ targetWeight, images} : 
  ScaleBatchTypes): 
  ScaleBatchResult {
  
  if (images.length < 1 || images == undefined) {
    throw new Error('No images found')
  }
  let totalMemory = 0
  for (const image of images) {
    const result = weight({ height: image.height, width: image.width, bytesPerPixel: image.bytesPerPixel })
    totalMemory += result.megabytes
  }
  const scaledImages: ScaleToMaxWeightResult[] = []
  for (const image of images) {
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