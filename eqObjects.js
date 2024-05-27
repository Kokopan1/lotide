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
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;  //if key length is not the same, return false
  }

  for (const key of obj1Keys) {
    //iterates over keys in obj1Key to see if the key:value match object2

    let obj1Value = object1[key];
    let obj2Value = object2[key];

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

// ===== Test 1: Same Object Key:Value =====
const shirtObject = { color: "red", size: "medium", material : "cotton", category: "woman"};
const anotherShirtObject = { size: "medium", color: "red", material : "cotton", category: "woman"};
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// ===== Test 2: Different Object Key Length =====
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long", material : "cotton", category: "woman"};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// ===== Test 3 : Different Object Key Value =====
const noSleeves = { size: "large", color: "red",  material : "cotton", category: "woman"};
eqObjects(shirtObject, noSleeves); // => false
assertEqual(eqObjects(shirtObject, noSleeves), false);


// ====== Arrays As Values Test ====
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);