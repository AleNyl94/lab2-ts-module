import { WeightTypes } from "../types/weighttypes"

/*
 * This function weights an image size based on 
 * its height, width and bytes per pixels.
 * 
 */
export function weight(
  height: number,
  width: number,
  bytesPerPixel = 4
): WeightTypes {
  if ( height <= 0 || width <= 0 || bytesPerPixel <= 0) {
    throw new Error('All parameters must be positive')
  }

  const bytesResult = height * width * bytesPerPixel
  const kilobytes = bytesResult / 1024
  const megabytes = kilobytes / 1024

  return {
    bytes: bytesResult,
    kilobytes: Number(kilobytes.toFixed(2)),
    megabytes: Number(megabytes.toFixed(2))
  }
}