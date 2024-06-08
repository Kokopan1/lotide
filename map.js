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



const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//                   (array, callback -> function called on e/ element in array)
const results1 = map(words, (word) => word[0]);
console.log(results1);


// ==== Test 1:  Letters Pass ====

const expectedOutput = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(results1, expectedOutput);

// ==== Test 2: Numbers Multiply Pass ====
const numb = [1, 2, 3, 4]

const results2 = map(numb, (num) => num * 2.);
assertArraysEqual(results2,[2, 4, 6, 8]);


// ==== Test 3: Mix Number and Letters Will be Undefined ====
const mixed = [1, 'goat', 3]

const results3 = map(mixed, (word) => word[0]);
assertArraysEqual(results3, [,'g',,]);

// ====  Test 4: Number Divide Pass =====

const numDivide = [2, 4, 6, 8]
const results4 = map(numDivide, (num) => num / 2);
assertArraysEqual(results4, [1, 2, 3, 4]);

module.exports = map;