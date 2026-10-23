import { WeightResult } from "../types/weightresult" 
import { Validator } from "./functions/validation";

/**
 * This function weights an image and calculates it's size based on 
 * height, width and bytes per pixels.
 * 
 * @param height- The pictures current height.
 * @param width - The pictures current width.
 * @param bytesPerPixel - The bytes per pixel depending on the pictures format.
 * @returns The picture size in bytes, kilobytes and megabytes.
 */
export class weight {
  private width: number;
  private height: number;
  private bytesPerPixel: number;
  private validator: Validator;

  constructor( height: number, width: number, bytesPerPixel: number) {
    this.validator = new Validator()
    this.validator.validateHeight(height)
    this.validator.validateWidth(width)
    this.validator.validateBytesPerPixel(bytesPerPixel)
    this.height = height
    this.width = width
    this.bytesPerPixel = bytesPerPixel
  }

  public run(): WeightResult {
    const bytesResult = this.height * this.width * this.bytesPerPixel
    const kilobytesResult = bytesResult / 1024
    const megabytesResult = kilobytesResult / 1024

    return {
      bytes: bytesResult,
      kilobytes: Number(kilobytesResult.toFixed(2)),
      megabytes: Number(megabytesResult.toFixed(2))
    }
  }
}