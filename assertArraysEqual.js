// Import Functions
const eqArrays = require("./eqArrays");


// Check Actual Vs Expected Arrays
const assertArraysEqual = function(expected, actual) {
  if (eqArrays(expected, actual)) {
    console.log(`🟢 Assertion Passed : ${expected} === ${actual}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${expected} !== ${actual}.`);
  }
};

// Export Functions
module.exports = assertArraysEqual;
