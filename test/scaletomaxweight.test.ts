import { describe, it, expect } from 'vitest'
import { scaleToMaxWeight } from '../src/scaletomaxweight'

describe('Should scale the image down to close to wanted weight, never over', () => {
  it('Should scale down the picture to below the desired limit', () => {
    const result = scaleToMaxWeight({ width: 1000, height: 1000, maxMegaBytes: 2, bytesPerPixel: 4 })
    expect(result.megaBytes).toBeLessThanOrEqual(2)
    expect(result.width).toBeLessThan(1000)
    expect(result.height).toBeLessThan(1000)
  })
  it('Should throw an error if measurements are 0 or less', () => {
    expect(() => scaleToMaxWeight({ width: -1, height: 0, maxMegaBytes: 0 })).toThrow('Measurements must be positive')
  })
})