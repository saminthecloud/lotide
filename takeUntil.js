//takeUntil Function Implementation
const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; !callback(array[i]) && i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
};

module.exports = takeUntil;