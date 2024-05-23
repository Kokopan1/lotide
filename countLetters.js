const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
const countLetters = function (sentence) {
  let results = {}
  for (const letters in sentence) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results
};

console.log(countLetters('heeey there'))