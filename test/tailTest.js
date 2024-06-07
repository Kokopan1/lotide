// Import Functions
const assertEqual = require("../assertEqual");
const tail = require("../tail");


// ==== Test Case 0: Checking Output
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are 


// ==== Test Case 1: to see if an array with one element should yield an empty array for its tail ====

const oneElement = ["One element"];
const oneElementTail = tail(oneElement);
console.log(oneElementTail);
tail(oneElement);
assertEqual(oneElementTail.length, 0);


// ==== Test Case 2: to see if an empty array will yield an empty array for its tail
const emptyArray = [];
const emptyArrayTail = tail(emptyArray);
console.log(emptyArrayTail);
tail(emptyArray);
assertEqual(emptyArrayTail.length, 0);


// ==== Test Case 3: Check the returned array elements
const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
tail(words);
assertEqual(words.length, 3);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
