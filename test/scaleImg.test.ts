import { describe, it, expect } from 'vitest'
import { scaleImage } from '../scaleImage.ts'

describe('scaleImage', () => {
  it('should with no user input scale the image down to 1/4 of its dimension', () => {
    const result = scaleImage({ width: 800, height: 400 })
    expect(result).toEqual({ width: 200, height: 100 })
  })
}
)

