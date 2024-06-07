// Import Functions

const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


// ==== Test Output ====
console.log(middle([1,2,3,5,6]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));


// ===== TEST CASE 1: Testing Number Array =====
console.log(middle([1, 2, 3, 4])); // => [1, 2, 3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]

// ==== TEST CASE 2: Testing String Array ====
console.log(middle(['hey', 'there', 'you', 'good', 'looking']));
assertArraysEqual(middle(['hey', 'there', 'you', 'good', 'looking']), ['you']);

// ===== TEST CASE 3: testing array modification =====
const testNumber = [1, 2, 6];

const testNumberCopy = [...testNumber];//makes copy of test number (spread operator, similar to slice)
console.log(middle(testNumberCopy));
assertArraysEqual(testNumberCopy, testNumber); // we did not modify the OG array
