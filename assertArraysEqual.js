const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Arrays are equal: ${arr1} === ${arr2}`);
  } else console.log(`🛑🛑🛑 Arrays are not equal: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;