import { describe, it, expect } from 'vitest'
import { GenerateThumbnails } from '../src/generateThumbnails'
import { ImageItem } from '../types/imageitem'

describe('GenerateThumbnails', () => {
  const rectangularImage: ImageItem = { width: 555, height: 333, bytesPerPixel: 4 }
  const squareImage: ImageItem = { width: 1000, height: 1000, bytesPerPixel: 4 }

  it('should generate small thumbnail dimensions', () => {
    const generator = new GenerateThumbnails(rectangularImage, 'small')

    const result = generator.run()

    expect(result.image).toEqual({ width: 150, height: 90, bytesPerPixel: 4 })
  })

  it('should generate medium thumbnail dimensions', () => {
    const generator = new GenerateThumbnails(rectangularImage, 'medium')

    const result = generator.run()

    expect(result.image).toEqual({ width: 300, height: 180, bytesPerPixel: 4 })
  })

  it('should generate large thumbnail dimensions', () => {
    const generator = new GenerateThumbnails(squareImage, 'large')

    const result = generator.run()

    expect(result.image).toEqual({ width: 600, height: 600, bytesPerPixel: 4 })
  })

  it('should throw an error when given an unsupported thumbnail size', () => {
    const invalidSize = 'mega-big' as unknown as 'small' | 'medium' | 'large'

    expect(() => new GenerateThumbnails(squareImage, invalidSize)).toThrow('Size not allowed')
  })

  it('should throw an error when image dimensions are negative', () => {
    const invalidImage: ImageItem = { width: -1, height: -1, bytesPerPixel: 4 }

    expect(() => new GenerateThumbnails(invalidImage, 'small')).toThrow('Measurements must be positive')
  })
})