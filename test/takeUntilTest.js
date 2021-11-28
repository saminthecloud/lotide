const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe("#takeUntil", () => {
  it('returns numbers before -1 from given list of numbers', () => {
    assert.deepEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
  });

  it('returns words before "," from given list of word array', () => {
    assert.deepEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ]);
  });

});