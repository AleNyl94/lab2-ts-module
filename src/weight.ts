import { WeightTypes } from "../types/weighttypes"
import { WeightResult } from "../types/weightresult"

/*
 * This function weights an image,
 * calculates it's size based on 
 * height, width and bytes per pixels.
 * 
 * @params WeightTypes - The properties that are calculated
 * for the input-picture.
 * @returns WeightResult - The picture size in bytes, kilobytes and megabytes.
 */
export function weight({ height, width, bytesPerPixel = 4 }: WeightTypes): WeightResult {
  if ( height <= 0 || width <= 0 || bytesPerPixel <= 0) {
    throw new Error('All parameters must be positive')
  }

  const bytesResult = height * width * bytesPerPixel
  const kilobytesResult = bytesResult / 1024
  const megabytesResult = kilobytesResult / 1024

  return {
    bytes: bytesResult,
    kilobytes: Number(kilobytesResult.toFixed(2)),
    megabytes: Number(megabytesResult.toFixed(2))
  }
}