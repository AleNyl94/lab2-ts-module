import { ScaleBatchTypes } from '../types/scalebatchtypes'
import { ScaleBatchResult } from '../types/scaleBatchResult'

export function scaleBatch({ targetWeight, images} : 
  ScaleBatchTypes): 
  ScaleBatchResult {
  
  if (images.length < 1 || images == undefined) {
    throw new Error('No images found')
  }

  
  return
}