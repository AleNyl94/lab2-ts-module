import { ImageItem } from '../../types/imageitem'
import type { ThumbnailSizes } from '../../types/thumbnailsize';
export class Validator {

  public validateImage(image: ImageItem): void {
    this.validateDimensions(image)
    this.validateBytesPerPixel(image.bytesPerPixel)
  }

  public validateDimensions(dimensions: { width: number; height: number }): void {
    this.validateMeasurement(dimensions.width)
    this.validateMeasurement(dimensions.height)
  }

  public validateMeasurement(measurement: number): void {
    if (measurement <= 0 || Number.isNaN(measurement)) {
      throw new Error('Measurements must be positive')
    }
  }

  public validateBytesPerPixel(bytesPerPixel: number): void {
    if (![1, 3, 4].includes(bytesPerPixel)) {
      throw new Error('Bytes per pixel must be 1, 3, or 4')
    }
  }

  public validateMaxMegaBytes(maxMegaBytes: number) {
    if (typeof maxMegaBytes !== 'number' || Number.isNaN(maxMegaBytes) || maxMegaBytes <= 0) {
      throw new Error('Max megabytes must be a positive number')
    }
  }

  public validateTargetWeight(targetWeight: number) {
    if (typeof targetWeight !== 'number' || Number.isNaN(targetWeight) || targetWeight <= 0) {
      throw new Error('Target weight must be a positive number')
    }
  }

  public validateScaleFactor(scaleFactor: number) {
    if (typeof scaleFactor !== 'number' || Number.isNaN(scaleFactor) || scaleFactor > 1) {
      throw new Error('The scale factor must be a decimal between 0 and/equal to 1')
    }
    if (!scaleFactor) {
      scaleFactor = 0.25;
    }
  }

  public validateArray(array: unknown[]) {
    if (!array || array.length < 1 || !Array.isArray(array)) {
      throw new Error('Array cannot be empty')
    }
  }

  public validateSize(size: string): void {
    const validSizes: ThumbnailSizes[] = ['small', 'medium', 'large']
    if (!validSizes.includes(size as ThumbnailSizes)) {
      throw new Error('Size not allowed')
    }
  }
}