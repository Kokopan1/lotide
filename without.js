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
    if (source[i] !== itemsToRemove[i]) {
      //push the non matching source elements out
      removedItems.push(source[i]);
    }
  }
  return removedItems;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

//how do i use the assetArraysEqual???

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);