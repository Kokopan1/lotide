const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } return false;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
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
assertEqual(results1["g"], "g");

// ==== Test 2: Letters Failed ====
assertEqual(results1["g"], "c");

// ==== Test 3: Number Failed ====
assertEqual(results1[0], "g");