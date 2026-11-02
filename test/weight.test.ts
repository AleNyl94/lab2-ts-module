import { describe, it, expect } from 'vitest'
import { Weight } from '../src/weight'
import { ImageItem } from '../types/imageitem'

describe('Weight', () => {
  it('should calculate memory size in bytes, kilobytes, and megabytes', () => {
    const image: ImageItem = { width: 1024, height: 1024, bytesPerPixel: 4 }
    const weightCalculator = new Weight(image)

    const result = weightCalculator.run()

    expect(result).toEqual({
      bytes: 4194304,
      kilobytes: 4096,
      megabytes: 4
    })
  })

  it('should throw an error when dimensions are negative', () => {
    const invalidImage: ImageItem = { width: -1024, height: 1024, bytesPerPixel: 4 }

    expect(() => new Weight(invalidImage)).toThrow('Measurements must be positive')
  })
})