import { ScaleTypes } from '../types/scaletypes.ts'
import { ScaleResult } from '../types/scaleresult.ts'
/* 
 * This is the function is  shrinking an image down with the
 * procentage chosen by the user. If no choice is made,
 * it is automatically set to 25%.
 * 
 * @param ScaleOptions The values that the scale changes.
 * @returns - Scaled down picture
 */
export function scale({ height, width, scaleFactor = 0.25 }: ScaleTypes): ScaleResult {
  // If statements to prevent illegal types and values as input to the function.
  if (typeof height !== 'number'|| Number.isNaN(height) || height <= 0) {
    throw new Error('Height must be a positive number')
  }

  if (typeof width !== 'number' || Number.isNaN(width) || width <= 0) {
    throw new Error('Width must be a positive number')
  }

  if (typeof scaleFactor !== 'number' || Number.isNaN(scaleFactor) || scaleFactor <= 0 || scaleFactor > 1) {
    throw new Error('The scale factor must be a decimal between 0 and/equal to 1')
  }

  const newHeight = Math.floor(height * scaleFactor)
  const newWidth = Math.floor(width * scaleFactor)

  return {
    height: newHeight,
    width: newWidth,
    scaleFactor: Number(scaleFactor.toFixed(4))
  }
}