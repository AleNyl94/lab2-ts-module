import { ScaleResult } from '../types/scaleresult.ts'
import { Validator } from './functions/validation.ts';
/**
 * This is the function is  shrinking an image down with the
 * procentage chosen by the user. If no choice is made,
 * it is automatically set to 25%.
 * 
 * @param height - The current height of the picture.
 * @param width - The current width of the picture.
 * @param scaleFactor - The desired factor in which to scale the picture down. 
 * 25% is default if no other input is given.
 * @returns Scaled down picture with new height and width as
 * well as the scaling factor.
 */
export class scale {
  private width: number;
  private height: number;
  private scaleFactor: number;
  private validator: Validator;

  constructor(width: number, height: number, scaleFactor: number) {
    this.validator = new Validator
    this.validator.validateHeight(height); 
    this.validator.validateWidth(width);
    this.validator.validateScaleFactor(scaleFactor);
    this.height = height;
    this.width = width;
    this.scaleFactor = scaleFactor;
  }

  public run(): ScaleResult {
    const newHeight = Math.floor(this.height * this.scaleFactor)
    const newWidth = Math.floor(this.width * this.scaleFactor)

    return {
      height: newHeight,
      width: newWidth,
      scaleFactor: Number(this.scaleFactor.toFixed(4))
    }
  }
}