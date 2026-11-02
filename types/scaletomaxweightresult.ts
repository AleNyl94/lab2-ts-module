import { ImageItem } from './imageitem'

export interface ScaleToMaxWeightResult {
  image: ImageItem,
  scaleFactor: number,
  megaBytes: number
}