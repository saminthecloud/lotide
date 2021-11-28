const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ac = { a: "1", c: "3" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


describe("#eqObjects", () => {
    
  it('returns true when comparing ab and ba', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });


  it('returns false when comparing ab and abc', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });


  it('returns false when comparing ab and ac', () => {
    assert.deepEqual(eqObjects(ab, ac), false);
  });


  it('returns true when comparing cd and dc', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });


  it('returns false when comparing cd and cd2', () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});