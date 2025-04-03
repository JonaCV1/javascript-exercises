function isValidChar(char) {
  let codeValue = char.charCodeAt();
  if (
    (codeValue >= 97 && codeValue <= 122) || // letras
    (codeValue >= 48 && codeValue <= 57) // números
  ) {
    return true;
  }
}

const palindromes = function (string) {
  let lowerString = string.toLowerCase();
  let arrayCharacters = Array.from(lowerString);
  let validArray = arrayCharacters.filter(isValidChar);
  let validString = validArray.join("");
  let reverseArray = validArray.reverse();
  let validReverseString = reverseArray.join("");
  console.log(validString);
  console.log(validReverseString);
  if (validString === validReverseString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
