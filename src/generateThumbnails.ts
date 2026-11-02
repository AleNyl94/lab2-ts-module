import { thumbnailSizes } from '../types/thumbnailsize'
import { GenerateThumbnailsResult } from '../types/generatethumbnailresult'
import { Scale } from './scale'
import { ImageItem } from '../types/imageitem'
import { Validator } from './functions/validation'


/**
 * Scales down a picture to a preset size for a typical thumbnail-picture.
 * Can be scaled down to small, medium or large.
 * 
 * @param height - Current height of the picture.
 * @param width - Current width of the picture.
 * @param size - The desired size of the thumbnail that the user wants.
 * @returns The new size of the picture along with the scale-factor.
 */
export class GenerateThumbnails {
  private image : ImageItem
  private size : thumbnailSizes
  private validator: Validator

  constructor(image: ImageItem, size: thumbnailSizes) {
    this.validator = new Validator
    this.validator.validateImage(image)
    this.validator.validateSize(size)
    this.image = image
    this.size = size
  }
  public run(): GenerateThumbnailsResult {
    let aspectWidth = 0
    switch (this.size) {
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
    const newScaleFactor = aspectWidth / this.image.width
    const thumbnail = new Scale( this.image, newScaleFactor ).run()
    return {
      image: {
      height: thumbnail.image.height,
      width: thumbnail.image.width,
      bytesPerPixel: thumbnail.image.bytesPerPixel
      }
    }
  }
}