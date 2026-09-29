import { describe, it, expect } from 'vitest'
import { scaleToRatio } from '../src/scaletoratio'

/**
 * Test for the scaleToRatio-function, that it works for valid and invalid input.
 */
describe('Scales the image to the ratio that is chosen', () => {
  it('Should return a image remade for the chosen format', () => {
    const result = scaleToRatio({ 
      height: 300,
      width: 300,
      aspectRatio: {
        height: 3,
        width: 4
      }
    })
    expect(result).toEqual({ height: 225, width: 300, aspectRatio: 1.33 })
  })
  it('Should throw error of indata is 0', () => {
    expect(()=> scaleToRatio({ height: 0, width: 0, aspectRatio: { height: 0, width: 0 }})).toThrow('Measurements must be positive')
  })
})