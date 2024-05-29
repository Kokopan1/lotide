const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(obj, callback) { 
  for (const key in obj) {  //looping through the keys in the object to get x
    if (callback(obj[key])) {  // if the callback is true
      return key  // return the key where callback is true
   }
  
    }
  return undefined; // else return undefined
}



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
