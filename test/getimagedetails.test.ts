import { describe, it, expect } from 'vitest'
import { GetImageDetails } from '../src/getImageDetails'
import { ImageItem } from '../types/imageitem'

describe('GetImageDetails', () => {
  const hdImage: ImageItem = {
    width: 1600,
    height: 900,
    bytesPerPixel: 4
  }

  it('should calculate aspect ratio, highDpi flag, and physical print size in cm', () => {
    const targetDpi = 300
    const analyzer = new GetImageDetails(hdImage, targetDpi)

    const result = analyzer.run()

    expect(result).toEqual({
      aspectRatio: {
        ratio: '16:9',
        decimal: 1.78
      },
      highDpi: false,
      printSizeCm: {
        height: 7.62,
        width: 13.55
      }
    })
  })

  it('should throw an error when image dimensions or target DPI are negative', () => {
    const invalidImage: ImageItem = { width: -1, height: -1, bytesPerPixel: 4 }
    const invalidDpi = -1

    expect(() => new GetImageDetails(invalidImage, invalidDpi)).toThrow('Measurements must be positive')
  })
})