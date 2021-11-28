//findKey Function Implementation
const findKey = (array, callback) => {
  for (let item in array) {
    if (callback(array[item]))
      return item;
  }
};

module.exports = findKey;