const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

describe("#findKeyByValue", () => {
  it('returns drama for The Wire', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undefined  for That 70s Show', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('returns 1 for earth', () => {
    assert.deepEqual(findKeyByValue(planetMoons, 1), "earth");
  });

  it('returns 0 for mercury', () => {
    assert.deepEqual(findKeyByValue(planetMoons, 0), "mercury");
  });

});