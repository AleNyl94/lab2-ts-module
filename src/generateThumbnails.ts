import { GenerateThumbnailsType } from '../types/generatethumbnailstype'
import { GenerateThumbnailsResult } from '../types/generatethumbnailresult'
import { scale } from './scale'

export function generateThumbnails({ height, width, size }: GenerateThumbnailsType): 
GenerateThumbnailsResult {
  if( height <= 0 || width <= 0) {
    throw new Error('Dimensions must be positive')
  }

  let aspectWidth = 0
  switch (size) {
    case 'small':
      aspectWidth = 150
      break
    case 'medium':
      aspectWidth = 300
      break
    case 'large':
      aspectWidth = 600
      break
    default:
      throw new Error('Size not allowed')
    }
  const newScaleFactor = aspectWidth / width
  const thumbnail = scale({ height: height, width: width, scaleFactor: newScaleFactor })
  return {
    height: thumbnail.height,
    width: thumbnail.width
  }
}