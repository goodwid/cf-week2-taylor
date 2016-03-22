var assert = require('assert');
var compute = require('../js/compute.js');

describe('My test', function() {
// DG: More than one test per function is probably better.  Try negative numbers, try breaking it and predicting how it breaks, etc.

  it('should return 9 because 5 + 4 is 9', function() { assert(9 == compute.sum(5,4)); });
  it('should return 24 because 8 * 3 is 24', function() { assert(24 == compute.multiply(8,3)); });
  it('should return [9,24] because 2+3+4 is 9, and 2*3*4 is 24', function() { assert(9,24 == compute.sumAndMultiply(2,3,4)); });
  it('should return 100 because 10+20+30+40 is 100', function() { assert(100 == compute.sumArray([10,20,30,40])); });
  it('should return 120 because 2*3*4*5', function() { assert(120 == compute.multiplyArray([2,3,4,5])); });

});
