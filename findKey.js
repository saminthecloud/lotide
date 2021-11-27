//findKey Function Implementation
const findKey = (array, callback) => {
  for (let item in array) {
    if (callback(array[item]))
      return item;
  }
};

//assertEqual Function Implementation
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Test the function
const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(movies, x => x.stars === 2),"noma");
assertEqual(findKey(movies, x => x.stars === 3),"Akaleri");