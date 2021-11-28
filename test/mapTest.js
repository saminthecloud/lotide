const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it('returns first letter of each word for a callback function word[0]', () => {
    assert.deepEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
  });

  it('returns an array of the length of each word for a callback function word.length', () => {
    assert.deepEqual(map(words, word => word.length),[ 6, 7, 2, 5, 3 ]);
  });

  it('returns last letter of each word for a callback function word.length -1', () => {
    assert.deepEqual(map(words, word => word[word.length - 1]),[ 'd', 'l', 'o', 'r', 'm' ]);
  });

});