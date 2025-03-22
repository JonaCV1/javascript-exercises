const sumAll = function (numberOne, numberTwo) {
  function isFloat(number) {
    if (number != Math.floor(number)) {
      return true;
    } else {
      false;
    }
  }

  if (
    typeof numberOne != `number` ||
    typeof numberTwo != `number` ||
    numberOne < 0 ||
    numberTwo < 0 ||
    isFloat(numberOne) ||
    isFloat(numberTwo)
  ) {
    return `ERROR`;
  } else {
    minNumber = Math.min(numberOne, numberTwo);
    maxNumber = Math.max(numberOne, numberTwo);
  }

  let sum = 0;
  for (let i = minNumber; i <= maxNumber; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
