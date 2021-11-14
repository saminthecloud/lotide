
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else console.log("🛑 Arrays are not equal");
};
  
//   // Test the function
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,1]);
assertArraysEqual(["1","2","3"],["1","2","3"]);
assertArraysEqual(["1","2","3"],["1","2",3]);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([1,2],[1,2,3]);