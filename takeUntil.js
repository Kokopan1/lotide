const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } return false;
};

const assertArraysEqual = function(expected, actual) {
  if (eqArrays(expected, actual)) {
    console.log(`🟢 Assertion Passed : ${expected} === ${actual}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${expected} !== ${actual}.`);
  }
};

const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (!callback(element))
      results.push(element);
    else
      break;
  }
  return results;
};




// ==== Test 1:  Until Negative Number Pass ====
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// ==== Test 2: Until ',' Pass ====
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// ==== Test 3: Until Emoji ====
const data3 = ["⛔", "🟢", "⛔", "⛔"];
const results3 = takeUntil(data3, x => x === "⛔");
assertArraysEqual(results3, []);
