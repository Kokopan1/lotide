const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};


const findKey = function(obj, callback) {
  for (const key in obj) {  //looping through the keys in the object to get x
    if (callback(obj[key])) {  // if the callback is true
      return key;  // return the key where callback is true
    }
  
  }
  return undefined; // else return undefined
};



console.log(
  findKey(
    {
      cat1: { furColor: 1 },
      cat2: { furColor: 2 },
      cat3: { furColor: 2 },
      cat4: { curColor: 3 },
    },
    (x) => x.furColor === 2
  ));
// => "cat2"


// === Test 1: Assertion Pass ===
assertEqual(findKey(
  {
    cat1: { furColor: 1 },
    cat2: { furColor: 2 },
    cat3: { furColor: 2 },
    cat4: { curColor: 3 },
  },
  (x) => x.furColor === 2
), "cat2");

// === Test 2: Assertion Failed ===
assertEqual(findKey(
  {
    cat1: { furColor: 1 },
    cat2: { furColor: 2 },
    cat3: { furColor: 2 },
    cat4: { curColor: 3 },
  },
  (x) => x.furColor === 2
), "cat3");

// === Test 3: Assertion Failed: Key not There: Undefined ===
assertEqual(findKey(
  {
    cat1: { furColor: 1 },
    cat2: { furColor: 2 },
    cat3: { furColor: 2 },
    cat4: { curColor: 3 },
  },
  (x) => x.furColor === 4
), undefined);
