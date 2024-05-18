
const assertEqual = function(actual, expected) {
  const errorMsg = `'Assertion Failed: ${actual} !== ${expected}'`;
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
    console.assert(actual === expected, "%o", {errorMsg});
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Hey', 'Hey');
assertEqual(1,3);