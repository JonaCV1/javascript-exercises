const reverseString = function (string) {
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    finalString = finalString + string.at(-1 - i);
  }
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
