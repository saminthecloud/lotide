// Function Implementation
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // Function findKeyByValue Implementation - 1 - My logic
// const findKeyByValue = function(objectToCheck, valueToCheck) {
//     for (let item in objectToCheck){
//         if (objectToCheck[item]=== valueToCheck)
//             return item;
//     }
// }

// Function findKeyByValue Implementation - 2 - Using recommended tips fromm LHL
const findKeyByValue = function(objectToCheck, valueToCheck) {
  let keyArray = Object.keys(objectToCheck);
  for (const element of keyArray) {
    if (objectToCheck[element] === valueToCheck) {
      return element;

    }
  }
};

// Test the function
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

let planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

assertEqual(findKeyByValue(planetMoons, 1), "earth");
assertEqual(findKeyByValue(planetMoons, 0), "mercury");