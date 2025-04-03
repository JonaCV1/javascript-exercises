const getTheTitles = function (array) {
  let books = [];
  array.forEach((object) => {
    books.push(object.title);
  });
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
