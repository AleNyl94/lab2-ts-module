import { describe, it, expect } from 'vitest'
import { ScaleToMaxWeight } from '../src/scaletomaxweight'
import { ImageItem } from '../types/imageitem'

describe('ScaleToMaxWeight', () => {
  const heavyImage: ImageItem = {
    width: 1000,
    height: 1000,
    bytesPerPixel: 4
  }

  it('should scale down image dimensions so memory weight does not exceed max megabytes', () => {
    const maxMegaBytes = 2
    const scaler = new ScaleToMaxWeight(heavyImage, maxMegaBytes)

    const result = scaler.run()

    expect(result.megaBytes).toBeLessThanOrEqual(maxMegaBytes)
    expect(result.image.width).toBeLessThan(heavyImage.width)
    expect(result.image.height).toBeLessThan(heavyImage.height)
    expect(result.scaleFactor).toBeLessThan(1)
  })

  it('should return unmodified image with scaleFactor 1.0 when already below max weight', () => {
    const generousMaxMegaBytes = 10
    const scaler = new ScaleToMaxWeight(heavyImage, generousMaxMegaBytes)

    const result = scaler.run()

    expect(result.image).toEqual(heavyImage)
    expect(result.scaleFactor).toBe(1.0)
  })

  it('should throw an error when image dimensions or max megabytes are zero or negative', () => {
    const invalidImage: ImageItem = { width: -1, height: 0, bytesPerPixel: 4 }

    expect(() => new ScaleToMaxWeight(invalidImage, 0)).toThrow('Measurements must be positive')
  })
})