const without = require('../without');
const assert = require('chai').assert;

const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it('checks that when one value is in the without, the other 2 values are retured', () => {
    assert.deepEqual(without([1, 2, 3], [1]),[2, 3]);
  });

  it('returns ["1", "2"] for without(["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('checks that original array was not altered by the without function', () => {
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});