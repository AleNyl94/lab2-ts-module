import { describe, it, expect } from 'vitest'
import { getImageDetails } from '../src/getImageDetails'

/**
 * Test for the getImageDetails-function, testing valid and invald input.
 */
describe('Get image-details', () => {
  it('Should return the correct details from the image', () => {
  const result = getImageDetails({ width: 1600, height: 900, targetDpi: 300 })
  expect(result).toEqual({ 
    aspectRatio: {
      ratio: '16:9',
      decimal: 1.78
    },
    highDpi: false,
    printSizeCm: {
      height: 7.62,
      width: 13.55
    }
    })
  })
  it('Should throw error if invalid dimensions', () => {
    expect(() => getImageDetails({width: -1, height: -1, targetDpi: -1})).toThrow('Invalid dimensions or DPI')
  })
})