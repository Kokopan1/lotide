const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = function(strings) {
  let objKeyLetter = {}
  for (const letter of strings) {
    if (!objKeyLetter[letter]) {
      objKeyLetter[letter] += 1;
    } else {
      objKeyLetter[letter] = 1;
    }
    
  }
  
  return objKeyLetter
};
console.log(countLetters('heeey there'))

