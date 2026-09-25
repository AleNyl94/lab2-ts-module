import { ScaleToRatioResult } from "../types/scaletoratioresult"
import { ScaleToRatioTypes } from "../types/scaletoratiotypes"

export function scaleToRatio({ 
  height, 
  width, 
  aspectRatio: 
  { height: ratioHeight, 
    width: ratioWidth 
    } 
  }: 
  ScaleToRatioTypes) : ScaleToRatioResult {
  if (width <= 0 || height <= 0 || ratioHeight <= 0 || ratioWidth <= 0) {
    throw new Error('Parameters must be a positive number')
  }
  const currentRatio = height / width
  const targetRatio =  ratioWidth / ratioHeight

  // Bilden är för hög
  if (currentRatio < targetRatio) {
    const newHeight = Math.floor(width / targetRatio)
    return {
      height: newHeight,
      width,
      aspectRatio: targetRatio
    } 
  }
  // Bilden är för smal
  if (targetRatio < currentRatio) {
    const newWidth = Math.floor(height * targetRatio)
    return {
      height,
      width: newWidth,
      aspectRatio: targetRatio
    }
  }
  // Ration är identiska
  return {
    height,
    width,
    aspectRatio: targetRatio
  }
}