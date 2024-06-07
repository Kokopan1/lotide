const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are 


// Test Case 1: to see if an array with one element should yield an empty array for its tail

const oneElement = ["One element"];
const oneElementTail = tail(oneElement);
console.log(oneElementTail);
tail(oneElement);
assertEqual(oneElementTail.length, 0);

/*
const oneElement = ["One element"];
console.log(tail(oneElement));
assertEqual(tail(oneElement).length, 0);
AI wants it done like above so can avoid calling the same argument all the time
*/
//Test Case 2: to see if an empty array will yield an empty array for its tail
const emptyArray = [];
const emptyArrayTail = tail(emptyArray);
console.log(emptyArrayTail);
tail(emptyArray);
assertEqual(emptyArrayTail.length, 0);


// Test Case 3: Check the returned array elements
const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
tail(words);
assertEqual(words.length, 3);
// fix this assertEqual(result.length, 3);
//Also, remember to check that the tail function does not mutate the original array. You can do this by asserting that the length of the original array remains the same after calling the tail function.
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

/*The output
Assertion Passed : 3 === 3. 👌👌👌
Assertion Passed : 2 === 2. 👌👌👌//ensures we get back to elements
Assertion Passed : Lighthouse === Lighthouse. 👌👌👌 // ensures first element is "Lighthouse"
Assertion Passed : Labs === Labs. 👌👌👌 // ensures second element is "Labs"
*/