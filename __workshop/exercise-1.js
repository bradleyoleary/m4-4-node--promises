// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

//Takes in an array of words, capitalizes them and returns a new array.
const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === 'string')) {
      //Itterating through array of words and convirting to all caps
      resolve(array.map((word) => word.toUpperCase()));
    } else {
      reject('There is a non-string in this list. Error!')
    }
  });
  return myPromise;
};

//Takes in an array of words, sorts the words in alphabetical order and return a new array.
const sortWords = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === 'string')) {
      //Using the sort method to return a new arr in alphabetical order
      let sortedArr = array.sort();
      resolve(sortedArr)
    } else {
      reject('There is a non-string in this list. Error!')
    }
  });
  return myPromise
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
