const findKey = require('../findKey');
const assert = require('chai').assert;

const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it('returns noma for stars = 2', () => {
    assert.deepEqual(findKey(movies, x => x.stars === 2),"noma");
  });

  it('returns Akaleri for stars = 3', () => {
    assert.deepEqual(findKey(movies, x => x.stars === 3),"Akaleri");
  });

  it('returns undefined for stars = 5', () => {
    assert.deepEqual(findKey(movies, x => x.stars === 5),undefined);
  });

});