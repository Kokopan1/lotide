// Import Functions

const assertEqual = require("../assertEqual");
const head = require("../head");


// ==== Test 1: Has Number ====
assertEqual(head([5, 6, 7]), 5);

// ==== Test 2: Has String ====
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");