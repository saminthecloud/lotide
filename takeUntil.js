//takeUntil Function Implementation
const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; !callback(array[i]) && i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
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
    
//asserArraysEqual Function Implementation
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else console.log("🛑 Arrays are not equal");
};
  
//Test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ]);