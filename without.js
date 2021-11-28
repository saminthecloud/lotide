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

module.exports = without;