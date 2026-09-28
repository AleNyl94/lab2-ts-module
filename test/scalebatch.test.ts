import { describe, it, expect } from 'vitest'
import { scaleBatch } from '../src/scaleBatch'

describe('Scale Batch', () => {
  it('Should present the new images sizes along with the amount of saved memory in total', () => {
  const result = scaleBatch({
  targetWeight: 0.5,
  images: [
    { width: 1920, height: 1080, bytesPerPixel: 4 },
    { width: 1280, height: 720, bytesPerPixel: 3 },
    { width: 800, height: 800, bytesPerPixel: 4 }
    ]
    })
    expect(result.images).toHaveLength(3)
    expect(result.savedMemory).toBeGreaterThan(0)
    expect(result).toHaveProperty('images')
    expect(result).toHaveProperty('savedMemory')
  })
  it('Should throw an error to an empty array', () => {
    expect(() => {
      scaleBatch({ targetWeight: 0.5, images: [] })
    }).toThrow('No images found')
  })
})