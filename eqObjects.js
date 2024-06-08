const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } return false;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};


// Check if the number of keys in both objects are the same
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


const cat1Char = { color: 'grey', weight : '5lbs', earType : 'floppy'};
const cat2Char = { color: ['white', 'brown'], weight : '5lbs', earType : 'floppy'};
const cat3Char = { color: 'grey', weight : '5lbs', earType : 'floppy'};
const cat4Char = { color: 'grey', weight : '5lbs', earType : 'floppy', purSound : 'loud'}
const cat5Char = { color: 'black', weight : '5lbs', earType : 'floppy'};
// ==== Test 1: Same Characteristics ====
assertEqual(eqObjects((cat1Char), (cat3Char)), true);

// ==== Test 2:  Different Characteristics ====
assertEqual(eqObjects(cat1Char, cat2Char), false);

// ==== Test 3: Characterisitics with Different Length ====
assertEqual(eqObjects(cat1Char, cat4Char), false);

// ==== Test4:  Characterisitics with Different Values ====
assertEqual(eqObjects(cat1Char, cat5Char), false);

module.exports = eqObjects;