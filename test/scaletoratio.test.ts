import { describe, it, expect } from 'vitest'
import { ScaleToRatio } from '../src/scaletoratio'
import { ImageItem } from '../types/imageitem'

describe('ScaleToRatio', () => {
  const squareImage: ImageItem = {
    width: 300,
    height: 300,
    bytesPerPixel: 4
  }

  it('should adjust height when image is too tall for the target aspect ratio', () => {
    const targetRatio = { width: 4, height: 3 }
    const scaler = new ScaleToRatio(squareImage, targetRatio)

    const result = scaler.run()

    expect(result).toEqual({
      image: {
        width: 300,
        height: 225,
        bytesPerPixel: 4
      },
      aspectRatio: 1.33
    })
  })

  it('should adjust width when image is too wide for the target aspect ratio', () => {
    const targetRatio = { width: 3, height: 4 }
    const scaler = new ScaleToRatio(squareImage, targetRatio)

    const result = scaler.run()

    expect(result).toEqual({
      image: {
        width: 225,
        height: 300,
        bytesPerPixel: 4
      },
      aspectRatio: 0.75
    })
  })

  it('should keep original dimensions when image already matches the target aspect ratio', () => {
    const targetRatio = { width: 1, height: 1 }
    const scaler = new ScaleToRatio(squareImage, targetRatio)

    const result = scaler.run()

    expect(result).toEqual({
      image: squareImage,
      aspectRatio: 1
    })
  })

  it('should throw an error when image dimensions are zero or negative', () => {
    const zeroImage: ImageItem = { width: 0, height: 0, bytesPerPixel: 4 }
    const validRatio = { width: 4, height: 3 }

    expect(() => new ScaleToRatio(zeroImage, validRatio)).toThrow('Measurements must be positive')
  })

  it('should throw an error when target aspect ratio contains zero or negative values', () => {
    const zeroRatio = { width: 0, height: 0 }

    expect(() => new ScaleToRatio(squareImage, zeroRatio)).toThrow('Measurements must be positive')
  })
})