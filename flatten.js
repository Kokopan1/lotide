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
  if (eqArrays(expected, actual)) {
    console.log(`🟢 Assertion Passed : ${expected} === ${actual}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${expected} !== ${actual}.`);
  }
};


// ==== flatten function ====
const flatten = function(arrToFlatten) {
    let flattenedArr = arrToFlatten.flat(Infinity) // to flatten out infiinity depth levels in the array
    return flattenedArr;
};

// ===== TEST CASE 1: testing number array =====
console.log(flatten([1, 2, [3, 4, [5]]])); // => [1, 2, 3, 4, 5]
assertArraysEqual(flatten([1, 2, [3, 4, [5]]]), [1, 2, 3, 4, 5]); // => [2, 3]

// ===== TEST CASE 2: testing string array =====
//const words = ["cat", "panda", "lighthouse"];
//flatten(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(flatten, ["panda", "cat", "lighthouse"]); // => should PASS

// ===== TEST CASE 3: testing array modification =====
//const testNumber = [1, 2, 5];
//const compareNumber = [1, 3, 5];
//const testNumberCopy = [...testNumber];//makes copy of test number (spread operator, similar to slice)
//flatten(testNumber, compareNumber);
//assertArraysEqual(testNumber, testNumberCopy); // we did not modify the OG array