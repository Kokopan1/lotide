const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = function(strings) {
  let objKeyLetter = {};
  for (const letter of strings) {
    if (!objKeyLetter[letter]) {
      objKeyLetter[letter] = 1; //if objKeyLetter is false = not there, then initialze it
    } else {
      objKeyLetter[letter]++; //if its there, add 1
    }
    
  }
  delete objKeyLetter[' ']; //delete the space, dont need it
  return objKeyLetter;
};
console.log(countLetters('heeey there'));

//purpose of function --> it sums the number of times a letter appears in a given string

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