const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
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
  
  
  for (let i = 0; i < strings.length; i++){
    
    if (!objKeyLetter[strings[i]]) {
       objKeyLetter[strings[i]] = [i] //if objKeyLetter is false = not there, then initialze it with an array
       
    } else {
      objKeyLetter[strings[i]].push(i) // if its there, push index into the array
    }
  }
  delete objKeyLetter[' ']; //delete the space, dont need it
  return objKeyLetter;
};
console.log(letterPositions('hii cutie'));

//Syntax
//initiate new variable = call function (string to analyze)
//call assertEqual on (newVarialbe.key, expected output);

// ==== Test 1: Letters ====
const test1 = countLetters('hey');
assertEqual(test1.h, 1);


// ==== Test 2: Add Numbers to string ====
const test2 = countLetters('1 2 3 3 3 34 hohoho');
assertEqual(test2.h, 3);


// ==== Test 3: String of numbers ===
const test3 = countLetters(' 1 1 1');
assertEqual(test3['1'], 3);

// ==== Test 4: Letter not in string ===
const test4 = countLetters('hey');
assertEqual(test4.l, undefined);