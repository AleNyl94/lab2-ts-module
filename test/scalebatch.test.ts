import { describe, it, expect } from 'vitest'
import { ScaleBatch } from '../src/scalebatch'
import { ImageItem } from '../types/imageitem'

describe('ScaleBatch', () => {
  const imageBatch: ImageItem[] = [
    { width: 1920, height: 1080, bytesPerPixel: 4 },
    { width: 1280, height: 720, bytesPerPixel: 3 },
    { width: 800, height: 800, bytesPerPixel: 4 }
  ]

  it('should scale all images in batch below target weight and calculate total saved memory', () => {
    const targetWeight = 0.5
    const batchProcessor = new ScaleBatch(targetWeight, imageBatch)

    const result = batchProcessor.run()

    expect(result.images).toHaveLength(3)
    expect(result.savedMemory).toBe(11.49)
  })

  it('should throw an error when initialized with an empty image array', () => {
    const emptyBatch: ImageItem[] = []

    expect(() => new ScaleBatch(0.5, emptyBatch)).toThrow('Array cannot be empty')
  })

  it('should throw an error when target weight is zero or negative', () => {
    expect(() => new ScaleBatch(0, imageBatch)).toThrow('Target weight must be a positive number')
  })
})