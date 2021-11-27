const assertEqual = require('./assertEqual');

// // assertEqual Function Implementation
// const assertEqual = function(actual, expected){

//     if (actual === expected) {
//         console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//     } else {
//         console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
//     }

// }

// head Function Implementation
const head = function(sampleArray){
    return sampleArray[0];
}

// Test the function
assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5]),5);
assertEqual(head(["Hello"]), "Hello");

assertEqual(head([]),undefined);