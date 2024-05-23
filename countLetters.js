const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = function(strings) {
  let results = {}
  for (const letter of strings) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    
  }
  
  return results
};
console.log(countLetters('heeey there'))

