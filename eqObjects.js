const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;