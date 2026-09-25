import { ScaleToMaxWeightResult } from './scaletomaxweightresult'

export interface ScaleBatchResult {
  images: ScaleToMaxWeightResult[],
  savedMemory: number
}