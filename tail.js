const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

const tail = function(arr1) {
  return arr1.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it

const oneElement = ["One element"]; // testing to see if an array with one element should yield an empty array for its tail
console.log(tail(oneElement));

const emptyArray = []; //testing to see if an empty array will yield an empty array for its tail
console.log(tail(emptyArray));

console.log(assertEqual(words.length, 3));

// Test Case 1: Check the returned array elements
const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

/*The output
Assertion Passed : 3 === 3. 👌👌👌
undefined
Assertion Passed : 2 === 2. 👌👌👌//ensures we get back to elements
Assertion Passed : Lighthouse === Lighthouse. 👌👌👌 // ensures first element is "Lighthouse"
Assertion Passed : Labs === Labs. 👌👌👌 // ensures second element is "Labs"
*/