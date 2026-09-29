import { describe, it, expect } from 'vitest'
import { generateThumbnails } from '../src/generateThumbnails'

/**
 * Test for the generateThumbnails-function testing valid and invalid input. 
 */
describe('Generating thumbnails', () => {
  it('Should return the picture with chosen size and correct measurements ', () => {
    const smallPicture = generateThumbnails({ height: 333, width: 555, size: 'small'})
    expect(smallPicture).toEqual({ height: 90, width: 150 })
    const mediumPicture = generateThumbnails({ height: 333, width: 555, size: 'medium' })
    expect(mediumPicture).toEqual({ height: 180, width: 300 })
    const largePicture = generateThumbnails({ height: 1000, width: 1000, size: 'large' })
    expect(largePicture).toEqual({ height: 600, width: 600 })
  })
  it('Should throw an error because of unknown size', () => {
    expect(() => generateThumbnails({ height: 200, width: 200, size: 'mega-big' as unknown as Parameters<typeof generateThumbnails>[0]['size'] })).toThrow('Size not allowed')
  })
  it('Should throw an error because of invalid dimensions', () => {
    expect(() => generateThumbnails({ height: -1, width: -1, size: 'small'})).toThrow('Dimensions must be positive')
  })
})