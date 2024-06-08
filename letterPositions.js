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


// ==== letterPositions Function ======
const letterPositions = function(strings) {
  let objKeyLetter = {};
  
  
  for (let i = 0; i < strings.length; i++) {
    
    if (!objKeyLetter[strings[i]]) {
      objKeyLetter[strings[i]] = [i]; //if objKeyLetter is false = not there, then initialze it with an array
       
    } else {
      objKeyLetter[strings[i]].push(i); // if its there, push index into the array
    }
  }
  delete objKeyLetter[' ']; //delete the space, dont need it
  return objKeyLetter;
};
console.log(letterPositions('hii cutiey'));

//Syntax
//initiate new variable = call function (string to analyze)
//call assertEqual on (newVarialbe.key, expected output);

// ==== Test 1: Letters ====
const test1 = letterPositions('hey');
assertArraysEqual(test1.h, [0]);


// ==== Test 2: String of numbers ===
const test3 = letterPositions(' 1 1 1');
assertArraysEqual(test3['1'], [1, 3, 5]);

module.exports = letterPositions;