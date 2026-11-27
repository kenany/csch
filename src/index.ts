import sign from 'signum';

/**
 * Calculates the hyperbolic cosecant of a number.
 *
 * @param x The number to calculate the hyperbolic cosecant of.
 * @returns The hyperbolic cosecant of `x`, or `NaN` if `x` is `0`.
 *
 * @example
 * ```ts
 * csch(Math.PI);
 * // => 0.08658953753004692
 * ```
 */
export function csch(x: number): number {
  if (x === 0) {
    return Number.NaN;
  }

  // csch should approach -INFINITY from the left and INFINITY from the right as
  // x approaches 0, `1 / sinh(x)` does not produce this behavior, so we must
  // invert the algebraic sinh function ourselves
  return (sign(x) * 2) / (Math.exp(x) - Math.exp(-x));
}
