// Import Functions
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// Function Find Middle of Array
const middle = function(array) {

  let middleNum = [];

  //find if array length is under/equal to 2
  if (array.length <= 2) {
    return middleNum;

    //find if array length is odd
  } else if (array.length % 2 !== 0) {
    middleNum.push(array[Math.round((array.length - 1) / 2)]);

    //the array length is even
  } else {
    
    //find the middle bottom of the arr length, find the middle top of the arr length
    middleNum.push(array[Math.floor((array.length - 1) / 2)], array[Math.ceil((array.length - 1) / 2)]);
  }
  return middleNum;
};

// Export Function
module.exports = middle;
