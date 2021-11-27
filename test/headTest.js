const head = require('../head');
const assertEqual = require('../assertEqual');

// Test the function
assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5]),5);
assertEqual(head(["Hello"]), "Hello");

assertEqual(head([]),undefined);