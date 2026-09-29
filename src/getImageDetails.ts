import { GetImageDetailsResult } from "../types/getimagedetailsresult"
import { GetImageDetailsType } from "../types/getimagedetailstype"
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
export function getImageDetails({ width, height, targetDpi }: 
  GetImageDetailsType):
  GetImageDetailsResult {
  if (width <= 0 || height <= 0 || targetDpi <= 0) {
    throw new Error('Invalid dimensions or DPI')
  }
  const commonDivisor = greatestCommonDivisor( width, height )
  const formatCheckWidth = width / commonDivisor
  const formatCheckHeight = height / commonDivisor
  
  const ratioString = `${formatCheckWidth}:${formatCheckHeight}`
  const aspectDecimal = Number((width / height).toFixed(2))
  const highDpi = width >= 1920

  const heightInCm = Number(((height / targetDpi) * 2.54).toFixed(2))
  const widthInCm = Number(((width / targetDpi) * 2.54).toFixed(2))

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