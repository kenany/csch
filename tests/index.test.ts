import { csch } from 'csch';
import { describe, expect, it } from 'vitest';

describe('csch', () => {
  it('should be a function', () => {
    expect(csch).toBeTypeOf('function');
  });

  it('should return NaN for 0', () => {
    expect(csch(0)).toBeNaN();
  });

  it('should calculate the hyperbolic cosecant', () => {
    expect(csch(1)).toBeCloseTo(0.850_918_128_239_321_6, 7);
    expect(csch(2)).toBeCloseTo(0.275_720_564_771_783_25, 4);
    expect(csch(3)).toBeCloseTo(0.099_821_569_668_822_73, 7);
    expect(csch(Math.PI)).toBeCloseTo(0.086_589_537_530_046_92, 4);
  });

  it('should approach infinity from either side of 0', () => {
    expect(csch(1e-22)).toBe(Number.POSITIVE_INFINITY);
    expect(csch(-1e-22)).toBe(Number.NEGATIVE_INFINITY);
  });
});
