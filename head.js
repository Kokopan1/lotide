/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

*/
const assertEqual = require("./assertEqual");

const head = function(arr1) {
  return arr1[0];
};

/*
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/

module.exports = head;