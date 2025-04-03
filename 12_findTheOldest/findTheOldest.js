const findTheOldest = function (array) {
  let ages = [];
  let setDate = new Date();
  let actualYear = setDate.getFullYear();
  array.forEach((object) => {
    if (object.yearOfDeath == undefined) {
      ages.push(actualYear - object.yearOfBirth);
    } else {
      ages.push(object.yearOfDeath - object.yearOfBirth);
    }
  });
  let index = ages.indexOf(Math.max(...ages));
  return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
