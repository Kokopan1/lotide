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

//it sums the number of times a letter appears in a given string
assertEqual()

const test1 = countLetters('hey');
assertEqual(test1.h, 1);

const test 2 = countLetters('1 2 3 3 3 34 hohoho')
assertEqual(test1.h, 3);