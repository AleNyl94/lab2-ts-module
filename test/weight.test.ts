import { describe, it, expect } from 'vitest'
import { weight } from '../src/weight'

/*
 * Test for the weight-function. Tests both valid and invalid input.
 * 
 */
describe('weight', () => {
  it('Should return the size in memory of the picture, in 3 different formats', () => {
    const result = weight({ width: 1024, height: 1024, bytesPerPixel: 4})
    expect(result).toEqual({ bytes: 4194304, kilobytes: 4096, megabytes: 4 })
  })
  it('Should throw an error if measurements are invalid', () => {
  expect(() => weight({ width: -1024, height: 1024, bytesPerPixel: 4 })).toThrow()
  })
})