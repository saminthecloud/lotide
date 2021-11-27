// Function Implementation
const assertEqual = function(actual, expected){

    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    }

}

// Test the function
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual("bootcamp", "Bootcamp");
assertEqual(234,234);
assertEqual(234,235);

module.exports = assertEqual;