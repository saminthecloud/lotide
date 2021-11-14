
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
    
// assertArraysEqual Function Implementation
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else console.log("🛑 Arrays are not equal");
};
     
// middle Function Implementation
const middle = function(inpArray) {
  let midArray = [];
  if (inpArray.length <= 2) {
    return midArray;
  } else if (inpArray.length % 2 === 1) {
    let i = Math.floor(inpArray.length / 2);
    midArray[0] = inpArray[i];
    return midArray;
  } else {
    let i = inpArray.length / 2;
    midArray[0] = inpArray[i - 1];
    midArray[1] = inpArray[i];
    return midArray;
  }
};
  
//Test the function
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);