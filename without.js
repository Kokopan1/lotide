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
  for (let i = 0; i < source.length; i++) {
    if(source[i] !== itemsToRemove[i]) {
     removedItems.push(itemsToRemove[i])
    }
    console.log(removedItems)
  }
  return removedItems
};

//without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//notes to self --> may need to do a nested loop to compare all values when arrays are different lengths