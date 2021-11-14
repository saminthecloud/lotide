
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
   
  
//Without Function Implementation
const without = function(sourceArray, itemsToRemoveArray) {
  let resultArray = [];
  let k = 0;
    
  for (let i = 0; i < sourceArray.length; i++) {
        
    let removeItem = false;
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if (sourceArray[i] === itemsToRemoveArray[j]) {
        removeItem = true;
        break;
      }
    }
    if (!removeItem) {
      resultArray[k] = sourceArray[i];
      k++;
    }
  }
  return resultArray;
};

//Test the function
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  
//Test that the original array was not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);