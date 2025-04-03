const add = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const sum = function (numberArray = [0]) {
  return numberArray.reduce((totalAcum, currentItem) => {
    return totalAcum + currentItem;
  }, 0);
};

const multiply = function (numberArray = [0]) {
  return numberArray.reduce((totalAcum, currentItem) => {
    return totalAcum * currentItem;
  }, 1);
};

const power = function (baseNumber, exponentNumber) {
  return baseNumber ** exponentNumber;
};

const factorial = function (number) {
  let result = 1;
  if (number === 0) {
    return 1;
  } else {
    for (let i = 1; i <= number; i++) {
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
