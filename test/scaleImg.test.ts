import { describe, it, expect } from 'vitest'
import { scaleImage } from '../scaleImage.ts'

describe('scaleImage', () => {
  // Tests the default scale.
  it('Should if no user input is made automatically scale the image down to 1/4 of its dimension', () => {
    const result = scaleImage({ width: 800, height: 400 })
    expect(result).toEqual({ width: 200, height: 100 })
  }),
  // Tests the error thrown if the number is illegal.
  it('Should throw the error for negative height', () => {
    expect(() =>
      scaleImage({ height: -100, width: 100})
    ).toThrow('Height must be a positive number')
  })
  it('Should throw the error for negative width', () => {
    expect(() =>
      scaleImage({ height: 100, width: -100})
    ).toThrow('Width must be a positive number')
  })
}
)

