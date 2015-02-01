var sign = require('signum')

function csch(x) {
  if (x === 0) {
    return NaN;
  }

  // csch should approach -INFINITY from the left and INFINITY from the right as
  // x approaches 0, `1 / sinh(x)` does not produce this behavior, so we must
  // invert the algebraic sinh function ourselves
  return sign(x) * 2 / (Math.exp(x) - Math.exp(-x));
}

module.exports = csch;
