import { GetImageDetailsResult } from "../types/getimagedetailsresult"
import { ImageItem } from "../types/imageitem"
import { Validator } from "./functions/validation"
import { greatestCommonDivisor } from "./greatestcommondivisor"

/**
 * Function to analyze and give more details about a picture.
 * 
 * @param width - The current width of the picture.
 * @param height - The current height of the picture.
 * @param targetDpi - The wished DPI for the picture, 
 * which is a form of picture-quality measurement.
 * @returns The details of the picture, if it fits any ratio, if it has high DPI and the 
 * measurements in centimeters.
 */
export class GetImageDetails {
  private image : ImageItem
  private targetDpi : number
  private validator : Validator

  constructor(image : ImageItem, targetDpi: number) {
    this.validator = new Validator
    this.validator.validateImage(image)
    this.image = image
    this.targetDpi = targetDpi
  }
  
  public run(): GetImageDetailsResult {
    const commonDivisor = greatestCommonDivisor( this.image.width, this.image.height )
    const formatCheckWidth = this.image.width / commonDivisor
    const formatCheckHeight = this.image.height / commonDivisor
    
    const ratioString = `${formatCheckWidth}:${formatCheckHeight}`
    const aspectDecimal = Number((this.image.width / this.image.height).toFixed(2))
    const highDpi = this.image.width >= 1920

    const heightInCm = Number(((this.image.height / this.targetDpi) * 2.54).toFixed(2))
    const widthInCm = Number(((this.image.width / this.targetDpi) * 2.54).toFixed(2))

    return {
      aspectRatio: {
        ratio: ratioString,
        decimal: aspectDecimal
      },
      highDpi,
      printSizeCm: {
        height: heightInCm,
        width: widthInCm
      }
    }
  }
}