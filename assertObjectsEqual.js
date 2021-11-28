// eqArrays Function Implementation
const eqArrays = function(arr1, arr2) {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  if (arr1Len === arr2Len) {
    for (let i = 0; i < arr1Len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else return false;
};
  
// eqObjects Function Implementation
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);
  
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  
  for (const element of keyArray1) {
          
    if ((Array.isArray(object1[element])) && (Array.isArray(object2[element]))) {
      const arrayComparisonResult = eqArrays(object1[element], object2[element]);
      return arrayComparisonResult;
    }
      
    if (object1[element] === object2[element]) {
      continue;
    } else return false;
  }
  return true;
};

// assertObjectsEqual Function Implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
  
module.exports = assertObjectsEqual;