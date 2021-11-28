const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it('returns true when comparing [1,2,3] and [1,2,3]', () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3]), true);
  });
  
  it('returns true when comparing [1,2,3] and [3,2,1]', () => {
    assert.deepEqual(eqArrays([1,2,3],[3,2,1]), false);
  });

  it('returns true when comparing ["1","2","3"] and ["1","2","3"]', () => {
    assert.deepEqual(eqArrays(["1","2","3"],["1","2","3"]), true);
  });

  it('returns false when comparing ["1","2","3"] and ["1","2",3]', () => {
    assert.deepEqual(eqArrays(["1","2","3"],["1","2",3]), false);
  });

  it('returns false when comparing [1,2,3] and [1,2]', () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2]), false);
  });

  it('returns false when comparing [1,2] and [1,2,3]', () => {
    assert.deepEqual(eqArrays([1,2],[1,2,3]), false);
  });
});