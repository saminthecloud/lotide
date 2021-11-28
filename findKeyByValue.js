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

module.exports = findKeyByValue;