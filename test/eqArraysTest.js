// Import Functions

const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


// ==== Test 1: Testing True and False for Numbers ====
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// ==== Test 2: Testing False for Strings and Length ====
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false); // => true

// ==== Test 3: Testing False for Mixed Numbers and Strings ====
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// ==== Test 3: Testing True for Empty ====
assertEqual(eqArrays([], []), true);

// ==== Test 4: Testing False for Full vs Empty ====
assertEqual(eqArrays([1, 2], []), false);

// ==== Test 5: Test True for Single ====
assertEqual(eqArrays([1], [1]), true);