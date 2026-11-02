import { describe, it, expect } from 'vitest'
import { Validator } from '../src/functions/validation'

describe('Validator', () => {
  const validator = new Validator()

  it('should not throw for valid ImageItem', () => {
    expect(() =>
      validator.validateImage({ width: 100, height: 100, bytesPerPixel: 4 })
    ).not.toThrow()
  })

  it('should throw when measurement is zero or negative', () => {
    expect(() => validator.validateMeasurement(0)).toThrow('Measurements must be positive')
    expect(() => validator.validateMeasurement(-5)).toThrow('Measurements must be positive')
  })

  it('should throw when bytesPerPixel is not 1, 3, or 4', () => {
    expect(() => validator.validateBytesPerPixel(2)).toThrow('Bytes per pixel must be 1, 3, or 4')
  })
})