const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } return false;
};

const assertArraysEqual = function(expected, actual) {
  if (eqArrays(expected, actual) === true) {
    console.log(`Assertion Passed : ${actual} === ${expected}.`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

console.log(assertArraysEqual([1,2], [1,2]));
