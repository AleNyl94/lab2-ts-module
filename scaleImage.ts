import { ScaleOptions } from './types.ts'
/* 
 * This is the module shrinking an image down with the
 * procentage chosen by the user. If no choice is made,
 * it is automatically set to 25%.
 * 
 * @param ScaleOptions The values that the scale changes.
 * @returns
 */
export function scaleImage({ height, width, scaleFactor = 0.25 }:ScaleOptions) {
   return {
    height: height * scaleFactor,
    width: width * scaleFactor
   }
}