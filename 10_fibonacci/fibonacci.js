const fibonacci = function (index) {
  let array = [1, 1];
  index = index.toString();
  if (index == 0) {
    return 0;
  } else if (index < 0) {
    return "OOPS";
  } else {
    for (let i = 0; i <= index; i++) {
      array.push(array[i] + array[i + 1]);
    }
    return array[index - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
