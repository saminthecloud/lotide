const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else console.log("🛑 Arrays are not equal");
};

module.exports = assertArraysEqual;
  
//   // Test the function
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,1]);
assertArraysEqual(["1","2","3"],["1","2","3"]);
assertArraysEqual(["1","2","3"],["1","2",3]);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([1,2],[1,2,3]);