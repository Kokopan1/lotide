const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};



const findKeyByValue = function(tvShow, showName) {
  
  for (const key of Object.keys(tvShow)) {

    //console.log(key, bestTVShowsByGenre[key]);
    if (tvShow[key] === showName) {
      return key; 
    }

  }
  
};

const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// ==== Test 1: A Matching and Unmatching String ====
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// ==== Test 2: Not A String ====
assertEqual(findKeyByValue(bestTVShowsByGenre, 5), undefined);
