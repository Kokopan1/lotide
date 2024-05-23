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

const middle = function(array) {

  let middleNum = [];
  let middleLow = [];
  let middleHi = [];

  if (array.length <= 2) {
    return middleNum
  } else if (array.length%2 != 0) {
    middleNum.push(array[Math.round((array.length - 1) / 2)]);
    //console.log(middleNum)
  } else {
    middleLow.push(array[Math.floor((array.length - 1) / 2)]);
    middleHi.push(array[Math.ceil((array.length - 1) / 2)]);
    middleNum = middleLow.concat(middleHi);
  }
  return middleNum;
};

console.log(middle([1,2,3,5,6]))
console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4]))


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
