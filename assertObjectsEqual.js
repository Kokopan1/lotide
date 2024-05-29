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
  if (eqObjects(actual, expected)) {  //returns true or false statement
    console.log(`Assertion Passed : ${inspect(actual)} === ${inspect(expected)}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}'`);
  }
};
// note to me --> without inspect it would just return -->
//Assertion Passed : [object Object] === [object Object]. 👌👌👌

const cat1Char = { color: 'grey', weight : '5lbs', earType : 'floppy'};
const cat2Char = { color: ['white', 'brown'], weight : '5lbs', earType : 'floppy'};
const cat3Char = { color: 'grey', weight : '5lbs', earType : 'floppy'};
const cat4Char = { color: 'grey', weight : '5lbs', earType : 'floppy', purSound : 'loud'}
const cat5Char = { color: 'black', weight : '5lbs', earType : 'floppy'};


// ==== Test Same Characteristics ====
assertObjectsEqual(cat1Char, cat3Char); 
// returns the actual and expected in the past condition aka will show you the objects key-value pairs for visual confirmation

// ==== Test Different Characteristics ====
assertObjectsEqual(cat1Char, cat2Char);

// ==== Test Characterisitics with Different Length ====
assertObjectsEqual(cat1Char, cat4Char);

// ==== Test Characterisitics with Different Values ====
assertObjectsEqual(cat1Char, cat5Char);


// note to me, its not assertObjectsEqual(eqObjects(cat1Char, cat2Char), false) --> this just returns a truthy or falsy, for this we dont want truthy or false we want a visual comparision of the actual objects

