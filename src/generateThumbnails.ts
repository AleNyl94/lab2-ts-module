import { GenerateThumbnailsType } from '../types/generatethumbnailstype'
import { GenerateThumbnailsResult } from '../types/generatethumbnailresult'
import { scale } from './scale'

/**
 * Scales down a picture to a preset size for a typical thumbnail-picture.
 * Can be scaled down to small, medium or large.
 * 
 * @param height - Current height of the picture.
 * @param width - Current width of the picture.
 * @param size - The desired size of the thumbnail that the user wants.
 * @returns The new size of the picture along with the scale-factor.
 */
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