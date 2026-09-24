import { describe, it, expect } from 'vitest'
import { scale } from '../src/scale.ts'

describe('scale', () => {
  // Tests the default scale.
  it('Should if no user input is made automatically scale the image down to 1/4 of its dimension', () => {
    const result = scale({ width: 800, height: 400 })
    expect(result).toEqual({ width: 200, height: 100 })
  }),
  // Tests the error thrown if the number is illegal.
  it('Should throw the error for negative height', () => {
    expect(() =>
      scale({ height: -100, width: 100})
    ).toThrow('Height must be a positive number')
  })
  it('Should throw the error for negative width', () => {
    expect(() =>
      scale({ height: 100, width: -100})
    ).toThrow('Width must be a positive number')
  })
}
)

