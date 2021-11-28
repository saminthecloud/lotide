const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const valuesToCheck = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
const result1 = countOnly(firstNames, valuesToCheck);

describe("#countOnly", () => {
  it('returns 1 for count of Jason', () => {
    assert.deepEqual(result1["Jason"], 1);
  });

  it('returns undefined for count of Karima', () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
  
  it('returns 2 for count of Fang', () => {
    assert.deepEqual(result1["Fang"], 2);
  });
  
  it('returns undefined for count of Agouhanna', () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });

});