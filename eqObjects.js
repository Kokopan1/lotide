const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

//pseudo code

/*
first we want to loop through the object and find the number of keys the object has
we want to do that for the second one as well
when we have that we want to compare the number of keys to see if they match
if they match when we want to compare that the values for For  THAT SAME KEY   in is the same as the other object

*/

/*
From there we can compare both the array lengths. If they are not equal, we should stop the test and return false

After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
As soon as there is not a match, we can return false
Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)

*/

const eqObjects = function (object1, object2) {

   if (Object.keys(object1).length !== Object.keys(object2).length) {;
    return false
   } else {
    for (const value of Object.keys(object1)) {
       if (Object.keys(object1).value === Object.keys(object2).value) {
        console.log(Object.keys(object1).value )
        return true
       } else {
        return false
      }
    }
   }
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
const noSleeves = { size: "large", color: "red",  material : "cotton", category: "woman"}
eqObjects(shirtObject, noSleeves); // => false
assertEqual(eqObjects(shirtObject, noSleeves), false);
