const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;  //if key length is not the same, return false
  }

  for (const key of obj1Keys) {
    //iterates over keys in obj1Key to see if the key:value match object2

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Checks if both values are arrays
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      //If not Array, they are Primitives
      return false;
    }
  }
  return true;
   
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

console.log(`Example label: ${inspect(actual)}`);

const cat1Char = { color: 'grey', weight : '5lbs', earType : 'floppy'};
const cat2Char = { color: ['white', 'brown'], weight : '5lbs', earType : 'floppy'};
const cat3Char = { color: 'grey', weight : '5lbs', earType : 'floppy'};
const cat4Char = { color: 'grey', weight : '5lbs', earType : 'floppy', purSound : 'loud'}

