import { ScaleToMaxWeightTypes } from '../types/scaletomaxweighttypes'
import { scale } from './scale'
import { weight } from './weight'


export function scaleToMaxWeight(
  width: number,
  height: number,
  maxMegaBytes: number,
  bytesPerPixel?: number
): ScaleToMaxWeightTypes {
  if (width <= 0 || height <= 0 || maxMegaBytes <= 0) {
    throw new Error('Parameters must be positive')
  }
  const currentWeight = weight({ height, width }, bytesPerPixel)

  if (currentWeight <= maxMegaBytes) {
    return {
      width,
      height,
      scaleFactor: 1.0,
      megaBytes: weight.megabytes

    }
  }

}