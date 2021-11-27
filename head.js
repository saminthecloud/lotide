const assertEqual = require('./assertEqual');

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