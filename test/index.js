var csch = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isNaN = require('lodash.isnan');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(csch));
});

test('csch', function(t) {
  t.plan(7);
  t.ok(isNaN(csch(0)));
  t.equal(csch(1), 0.8509181282393216);
  t.equal(csch(2), 0.27572056477178325);
  t.equal(csch(3), 0.09982156966882273);
  t.equal(csch(Math.PI), 0.08658953753004692);
  t.equal(csch(1e-22), Number.POSITIVE_INFINITY);
  t.equal(csch(-1e-22), Number.NEGATIVE_INFINITY);
});
