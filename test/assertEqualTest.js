const assertEqual = require("../assertEqual");

//  ==== Test 1: Test Strings Failed ====
assertEqual("Lighthouse Labs", "Bootcamp");

//  ==== Test 2: Test Number Pass ====
assertEqual(1, 1);

//  ==== Test 3: Test Strings Pass ====
assertEqual('Hey', 'Hey');

//  ==== Test 4: Test Number Failed ====
assertEqual(1,3);
