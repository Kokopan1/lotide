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
const flatten = (arrToFlatten) => {
  let flattenedAr = []
  //Loop through the array
  for(let i = 0; i < arrToFlatten.length; i++) {
    //console.log(arrToFlatten[i])
    if (Array.isArray(arrToFlatten[i])) {
      //if array, passback and run the element through the function again, merge arrays
      flattenedAr = flattenedAr.concat(flatten(arrToFlatten[i]));
    } else {
      //if not array, add it to the flattenedAr variable
      flattenedAr.push(arrToFlatten[i]);
    }
  }

  return flattenedAr
};

// ===== TEST CASE 1: Testing Number Array =====
console.log(flatten([1, 2, [3, 4]])); // => [1, 2, 3, 4]
assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]); // => [1, 2, 3, 4]

// ==== TEST CASE 2: Testing String Array ====
console.log(flatten(['hey', 'there', ['good', 'looking']]));
assertArraysEqual(flatten(['hey', 'there', ['good', 'looking']]), ['hey', 'there', 'good', 'looking']);

// ===== TEST CASE 3: testing array modification =====
const testNumber = [1, 2, [5,6]];

const testNumberCopy = [...testNumber];//makes copy of test number (spread operator, similar to slice)
console.log(flatten(testNumberCopy));
assertArraysEqual(testNumberCopy, testNumber); // we did not modify the OG array
