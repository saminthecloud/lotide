// assertEqual Function Implementation
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//eqArrays Function Implementation
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

// Test the function
assertEqual(eqArrays([1,2,3],[1,2,3]), true);
assertEqual(eqArrays([1,2,3],[3,2,1]), false);
assertEqual(eqArrays(["1","2","3"],["1","2","3"]), true);
assertEqual(eqArrays(["1","2","3"],["1","2",3]), false);
assertEqual(eqArrays([1,2,3],[1,2]), false);
assertEqual(eqArrays([1,2],[1,2,3]), false);