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
    console.log(letter)
    
  }
  
  return results
};
console.log(countLetters('heeey there'))


//Idea 1
//could you also copy the string and set all the values as zero
//if it doesnt match any properties in the object then push it into the object
//if it does match the object, then increase the value of the key by 1

//Idea 2
//push the element as a kay-value pair into an object
//if it doesnt match any properties in the object then push it into the object
//if it does match the object, then increase the value of the key by 1