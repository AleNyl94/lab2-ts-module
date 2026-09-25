import { GetImageDetailsResult } from "../types/getimagedetailsresult"
import { GetImageDetailsType } from "../types/getimagedetailstype"
import { greatestCommonDivisor } from "./greatestcommondivisor"

export function getImageDetails({ width, height, targetDpi }: 
  GetImageDetailsType):
  GetImageDetailsResult {
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