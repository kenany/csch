var csch = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isNaN = require('lodash.isnan');
var almostEqual = require('almost-equal');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(csch));
});

test('csch', function(t) {
  t.plan(7);
  t.ok(isNaN(csch(0)));
  t.ok(almostEqual(csch(1), 0.8509181282393216));
  t.ok(almostEqual(csch(2), 0.27572056477178325, 0.0001));
  t.ok(almostEqual(csch(3), 0.09982156966882273));
  t.ok(almostEqual(csch(Math.PI), 0.08658953753004692, 0.0001));
  t.ok(almostEqual(csch(1e-22), Number.POSITIVE_INFINITY));
  t.ok(almostEqual(csch(-1e-22), Number.NEGATIVE_INFINITY));
});
