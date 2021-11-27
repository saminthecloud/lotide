// middle Function Implementation
const middle = function(inpArray) {
  let midArray = [];
  if (inpArray.length <= 2) {
    return midArray;
  } else if (inpArray.length % 2 === 1) {
    let i = Math.floor(inpArray.length / 2);
    midArray[0] = inpArray[i];
    return midArray;
  } else {
    let i = inpArray.length / 2;
    midArray[0] = inpArray[i - 1];
    midArray[1] = inpArray[i];
    return midArray;
  }
};

module.exports = middle;