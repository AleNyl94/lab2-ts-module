import { ScaleToMaxWeightTypes } from '../types/scaletomaxweighttypes'
import { ScaleToMaxWeightResult } from '../types/scaletomaxweightresult'
import { scale } from './scale'
import { weight } from './weight'


export function scaleToMaxWeight({ width, height, maxMegaBytes, bytesPerPixel = 4 }: 
  ScaleToMaxWeightTypes): ScaleToMaxWeightResult {
  if (width <= 0 || height <= 0 || maxMegaBytes <= 0) {
    throw new Error('Parameters must be positive')
  }
  const currentWeight = weight({ height, width, bytesPerPixel })

  if (currentWeight.megabytes <= maxMegaBytes) {
    return {
      width,
      height,
      scaleFactor: 1.0,
      megaBytes: currentWeight.megabytes
    }
  }

  const currentWeightMegaBytes = currentWeight.megabytes
  const relation = maxMegaBytes / currentWeightMegaBytes
  const targetScaleFactor = Math.sqrt(relation)

  const scaledImage = scale({ width, height, scaleFactor: targetScaleFactor})
  const scaledImageWeight = weight({ height: scaledImage.height, width: scaledImage.width, bytesPerPixel })

  return {
    height: scaledImage.height,
    width: scaledImage.width,
    megaBytes: scaledImageWeight.megabytes,
    scaleFactor: scaledImage.scaleFactor
  }
}