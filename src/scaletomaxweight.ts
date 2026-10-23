import { ScaleToMaxWeightTypes } from '../types/scaletomaxweighttypes'
import { ScaleToMaxWeightResult } from '../types/scaletomaxweightresult'
import { scale } from './scale'
import { weight } from './weight'
import { Validator } from './functions/validation'

/**
 * Scales a picture down to below the size-limit.
 *
 * @param width - The current width of the picture.
 * @param height - The current height of the picture. 
 * @param maxMegaBytes - The limit of maximal size in megabytes.
 * @param bytesPerPixel - How many bytes per pixel the picture has depending on it's format.
 * @returns The pictures new size, measurements and scale-factor.
 */
export class scaleToMaxWeight { 
  private width: number
  private height: number
  private maxMegaBytes: number
  private bytesPerPixel: number
  private validator: Validator

  constructor(width: number, height: number, maxMegaBytes: number, bytesPerPixel: number) {
    this.validator = new Validator
    this.validator.validateHeight(height)
    this.validator.validateWidth(width)
    this.validator.validateMaxMegaBytes(maxMegaBytes)
    this.validator.validateBytesPerPixel(bytesPerPixel)
    this.width = width
    this.height = height
    this.maxMegaBytes = maxMegaBytes
    this.bytesPerPixel = bytesPerPixel
  }

  public run() {
    const currentWeight = new weight(this.height, this.width, this.bytesPerPixel)


  if (currentWeight.megabytes <= maxMegaBytes) {
    return {
      this.width,
      this.height,
      scaleFactor: 1.0,
      megaBytes: currentWeight.megabytes
    }
  }

  const currentWeightMegaBytes = currentWeight.megabytes
  const relation = this.maxMegaBytes / currentWeightMegaBytes
  const targetScaleFactor = Math.sqrt(relation)

  const scaledImage = new scale( this.width, this.height, targetScaleFactor )
  const scaledImageWeight = weight({
    height: scaledImage.height,
    width: scaledImage.width,
    bytesPerPixel
  })

  return {
    height: scaledImage.height,
    width: scaledImage.width,
    megaBytes: scaledImageWeight.megabytes,
    scaleFactor: scaledImage.scaleFactor
  }
  }
}
