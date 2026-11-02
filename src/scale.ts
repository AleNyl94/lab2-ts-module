import { ImageItem } from '../types/imageitem.ts';
import { ScaleResult } from '../types/scaleresult.ts'
import { Validator } from './functions/validation.ts';
/**
 * This function is shrinking an image down with the
 * procentage chosen by the user. If no choice is made,
 * it is automatically set to 25%.
 * 
 * @param image - The image to be scaled.
 * @param scaleFactor - The desired factor in which to scale the picture down. 
 * 25% is default if no other input is given.
 * @returns Scaled down picture with new height and width as
 * well as the scaling factor.
 */
export class Scale {
  private image: ImageItem
  private scaleFactor: number;
  private validator: Validator;

  constructor(image: ImageItem, scaleFactor: number = 0.25) {
    this.validator = new Validator
    this.validator.validateImage(image)
    this.validator.validateScaleFactor(scaleFactor);
    this.image = image
    this.scaleFactor = scaleFactor;
  }

  public run(): ScaleResult {
    return {
    image: {
      width: Math.floor(this.image.width * this.scaleFactor),
      height: Math.floor(this.image.height * this.scaleFactor),
      bytesPerPixel: this.image.bytesPerPixel
    },
    scaleFactor: this.scaleFactor
  }
  }
}