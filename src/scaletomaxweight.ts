import { ScaleToMaxWeightTypes } from '../types/scaletomaxweighttypes'
import { ScaleToMaxWeightResult } from '../types/scaletomaxweightresult'
import { scale } from './scale'
import { weight } from './weight'

/**
 * Scales a picture down to below the size-limit.
 *
 * @param width - The current width of the picture.
 * @param height - The current height of the picture. 
 * @param maxMegaBytes - The limit of maximal size in megabytes.
 * @param bytesPerPixel - How many bytes per pixel the picture has depending on it's format.
 * @returns The pictures new size, measurements and scale-factor.
 */
export function scaleToMaxWeight({ width, height, maxMegaBytes, bytesPerPixel = 4 }: 
  ScaleToMaxWeightTypes): ScaleToMaxWeightResult {
  if (width <= 0 || height <= 0 || maxMegaBytes <= 0) {
    throw new Error('Measurements must be positive')
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
  const scaledImageWeight = weight({ height: scaledImage.height, width: scaledImage.width, bytesPerPixel: 4 })

  return {
    height: scaledImage.height,
    width: scaledImage.width,
    megaBytes: scaledImageWeight.megabytes,
    scaleFactor: scaledImage.scaleFactor
  }
}