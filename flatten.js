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
const toFlatten = (arrToFlatten) => {

};

// ===== TEST CASE 1: testing number array =====
console.log(toFlatten([1, 2, [3, 4]])); // => [1, 2, 3, 4]
assertArraysEqual(toFlatten([1, 2, [3, 4]]), [1, 2, 3, 4]); // => [2, 3]

// ==== Test Case 2: Testing If It Is An Array ====
//console.log(flatten('lighthouse'));


// ===== TEST CASE 3: testing array modification =====
//const testNumber = [1, 2, 5];
//const compareNumber = [1, 3, 5];
//const testNumberCopy = [...testNumber];//makes copy of test number (spread operator, similar to slice)
//flatten(testNumber, compareNumber);
//assertArraysEqual(testNumber, testNumberCopy); // we did not modify the OG array

//flatten
/*let flattenedArr = arrToFlatten.flat(Infinity); // to flatten out infiinity depth levels in the array
    return flattenedArr;
  } else {
    return "not an array";
  }
*/