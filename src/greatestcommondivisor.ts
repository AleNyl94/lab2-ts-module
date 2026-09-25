/*
 * Function to find the greatest common divisor between two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns - The greatest common divisor between the two.
 */
export function greatestCommonDivisor(a: number, b: number) {
  a = Math.abs(Math.round(a))
  b = Math.abs(Math.round(b))
  if (a < 0 || b < 0) {
    throw new Error('Numbers must be positive')
  }
  if (b === 0) {
    return a
  } else {
    return greatestCommonDivisor(b, a % b)
  }
}