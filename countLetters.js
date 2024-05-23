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

