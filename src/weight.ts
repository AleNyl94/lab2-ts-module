import { ImageItem } from "../types/imageitem";
import { WeightResult } from "../types/weightresult" 
import { Validator } from "./functions/validation";

/**
 * This function weights an image and calculates it's size based on 
 * height, width and bytes per pixels.
 * 
 * @param image - The image to be weighed.
 * @returns The picture size in bytes, kilobytes and megabytes.
 */
export class Weight {
  private image: ImageItem
  private validator: Validator;

  constructor( image: ImageItem ) {
    this.validator = new Validator()
    this.validator.validateImage(image)
    this.image = image
  }

  public run(): WeightResult {
    const bytesResult = this.image.height * this.image.width * this.image.bytesPerPixel
    const kilobytesResult = bytesResult / 1024
    const megabytesResult = kilobytesResult / 1024

    return {
      bytes: bytesResult,
      kilobytes: Number(kilobytesResult.toFixed(2)),
      megabytes: Number(megabytesResult.toFixed(2))
    }
  }
}