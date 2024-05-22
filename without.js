//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

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



const without = function(source, itemsToRemove) {
  let removedItems = [];
  //loop through the array
  for (let i = 0; i < source.length; i++) {
    //compare the arrays
    if (!itemsToRemove.includes(source[i])) {
      //push the non matching source elements out
      removedItems.push(source[i]);
    }
  }
  return removedItems;
};

// ===== TEST CASE 1: testing number array =====
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// ===== TEST CASE 2: testing string array =====
const words = ["cat", "panda", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["panda", "cat", "lighthouse"]); // => should PASS

// ===== TEST CASE 3: testing array modification =====
const testNumber = [1, 2, 5]
const compareNumber = [1, 3, 5]
const testNumberCopy = [...testNumber]//makes copy of test number (spread operator, similar to slice)
without(testNumber, compareNumber)
assertArraysEqual(testNumber, testNumberCopy); // we did not modify the OG array