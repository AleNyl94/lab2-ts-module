import { describe, it, expect } from 'vitest'
import { greatestCommonDivisor } from '../src/greatestcommondivisor'

/**
 * Tests the greatestCommonDivisor-function, testing all the 
 * if-statements and that the output is correct.
 */
describe('Greatest common divisor', () => {
  it('Tests if the correct common divisor is found', () => {
    const fraction = greatestCommonDivisor(10, 5)
    expect(fraction).toEqual(5)
  })
  it('Should throw error of numbers are negative', () => {
    expect(() => greatestCommonDivisor(-1, -2)).toThrow('Numbers must be positive')
  })
  it('Sends back the first parameter if the second one is 0', () => {
    expect(greatestCommonDivisor(1, 0)).toEqual(1)
  })
})