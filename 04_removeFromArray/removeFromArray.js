const removeFromArray = function (vector, ...elements) {
  for (let element of elements) {
    for (let i = 0; i < vector.length; i++) {
      if (vector[i] === element) {
        vector.splice(i, 1);
        i--;
      } else {
        continue;
      }
    }
  }
  return vector;
};

// Do not edit below this line
module.exports = removeFromArray;
