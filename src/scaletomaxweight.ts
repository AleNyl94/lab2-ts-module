import { Scale } from './scale'
import { Weight } from './weight'
import { Validator } from './functions/validation'
import { ImageItem } from '../types/imageitem'
import { ScaleToMaxWeightResult } from '../types/scaletomaxweightresult'

/**
 * Scales a picture down to below the size-limit.
 *
 * @param image - image to be scaled. 
 * @param maxMegaBytes - The limit of maximal size in megabytes.
 * @param bytesPerPixel - How many bytes per pixel the picture has depending on it's format.
 * @returns The pictures new size, measurements and scale-factor.
 */
export class ScaleToMaxWeight { 
  private image : ImageItem
  private maxMegaBytes: number
  private validator: Validator

  constructor(image: ImageItem, maxMegaBytes: number) {
    this.validator = new Validator
    this.validator.validateImage(image)
    this.validator.validateMaxMegaBytes(maxMegaBytes)
    this.image = image
    this.maxMegaBytes = maxMegaBytes
  }

  public run(): ScaleToMaxWeightResult {
    const currentWeight = new Weight(this.image).run()

    if (currentWeight.megabytes <= this.maxMegaBytes) {
      return {
      image: {
        width: this.image.width,
        height: this.image.height,
        bytesPerPixel: this.image.bytesPerPixel
        },
        scaleFactor: 1.0,
        megaBytes: currentWeight.megabytes
      }
    }

    const currentWeightMegaBytes = currentWeight.megabytes
    const relation = this.maxMegaBytes / currentWeightMegaBytes
    const targetScaleFactor = Math.sqrt(relation)

    const scaledImage = new Scale( this.image, targetScaleFactor ).run()
    const scaledImageWeight = new Weight( scaledImage.image ).run()

    return {
      image: {
        height: scaledImage.image.height,
        width: scaledImage.image.width,
        bytesPerPixel: scaledImage.image.bytesPerPixel
      },
      megaBytes: scaledImageWeight.megabytes,
      scaleFactor: scaledImage.scaleFactor
    }
  }
}
