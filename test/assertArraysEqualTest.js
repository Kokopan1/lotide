const eqArrays = require("../eqArrays");

const assertArraysEqual = require("../assertArraysEqual");


// ==== Test 1: Assertion Passed ====
assertArraysEqual([1,2], [1,2]);

// ==== Test 2: Assertion Failed ====
assertArraysEqual([1,2,3], [1,2]);