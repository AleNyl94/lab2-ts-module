import { ScaleToRatioResult } from "../types/scaletoratioresult"
import { Validator } from './functions/validation'
import { ImageItem } from '../types/imageitem'

interface AspectRatio {
  width: number
  height: number
}

/**
 * Scales a picture to fit a chosen ratio.
 *
 * @param image - The image to be scaled.
 * @param aspectRatio { height, width } - The desired ratio.
 * @returns The image's new m and the scale-factor.
 */
export class ScaleToRatio {
  private image: ImageItem
  private aspectRatio: AspectRatio
  private validator: Validator

  constructor( image: ImageItem, aspectRatio: AspectRatio) {
    this.validator = new Validator
    this.validator.validateImage(image)
    this.validator.validateDimensions(aspectRatio)
    this.image = image
    this.aspectRatio = aspectRatio
  }

  public run(): ScaleToRatioResult { 
    const currentRatio = this.image.width / this.image.height
    const targetRatio = this.aspectRatio.width / this.aspectRatio.height

    const newDimensions = this.calculateNewDimensions(currentRatio, targetRatio)

    return {
      image: {
        height: newDimensions.height,
        width: newDimensions.width,
        bytesPerPixel: this.image.bytesPerPixel
      },
      aspectRatio: Number(targetRatio.toFixed(2))
    }
  }

  private calculateNewDimensions(currentRatio: number, targetRatio: number) {
    if (this.isImageTooTall(currentRatio, targetRatio)) {
      return {
        width: this.image.width,
        height: Math.floor(this.image.width / targetRatio)
      }
    }

    if (this.isImageTooWide(currentRatio, targetRatio)) {
      return {
        width: Math.floor(this.image.height * targetRatio),
        height: this.image.height
      }
    }

    return {
      width: this.image.width,
      height: this.image.height
    }
  }

  private isImageTooTall(currentRatio: number, targetRatio: number): boolean {
    return currentRatio < targetRatio
  }

  private isImageTooWide(currentRatio: number, targetRatio: number): boolean {
    return currentRatio > targetRatio
  }
}
