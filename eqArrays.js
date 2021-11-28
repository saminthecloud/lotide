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

module.exports = eqArrays;