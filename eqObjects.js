// assertEqual Function Implementation
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Test the function
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const ac = { a: "1", c: "3" };
assertEqual(eqObjects(ab, ac), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);