import { describe, it, expect } from 'vitest'
import { Scale } from '../src/scale'
import { ImageItem } from '../types/imageitem'

describe('Scale', () => {
  const validImage: ImageItem = {
    width: 800,
    height: 400,
    bytesPerPixel: 4
  }

  it('should scale image dimensions down to 25% by default when no scale factor is provided', () => {
    const scaler = new Scale(validImage)

    const result = scaler.run()

    expect(result).toEqual({
      image: {
        width: 200,
        height: 100,
        bytesPerPixel: 4
      },
      scaleFactor: 0.25
    })
  })

  it('should scale image dimensions according to a custom scale factor', () => {
    const scaler = new Scale(validImage, 0.5)

    const result = scaler.run()

    expect(result).toEqual({
      image: {
        width: 400,
        height: 200,
        bytesPerPixel: 4
      },
      scaleFactor: 0.5
    })
  })

  it('should throw an error during instantiation when height is negative', () => {
    const invalidImage: ImageItem = { ...validImage, height: -100 }

    expect(() => new Scale(invalidImage)).toThrow('Measurements must be positive')
  })

  it('should throw an error during instantiation when width is negative', () => {
    const invalidImage: ImageItem = { ...validImage, width: -100 }

    expect(() => new Scale(invalidImage)).toThrow('Measurements must be positive')
  })
})