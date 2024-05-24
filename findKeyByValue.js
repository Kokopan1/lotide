const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}. 👌👌👌`);
  } else {
    console.log(`'Assertion Failed: ${actual} !== ${expected}'`);
  }
};



const findKeyByValue = function (tvShow, showName) {
  let genre = 0;
  for (const key of Object.keys(bestTVShowsByGenre)) {
    //console.log(key, bestTVShowsByGenre[key]);
     if (bestTVShowsByGenre[key] === showName) {
      genre = key
      
    }
  
  }
  return genre
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
 /*
for (const key of Object.keys(bestTVShowsByGenre)) {
  console.log(key, bestTVShowsByGenre[key]);
  for (let i = 0; i < bestTVShowsByGenre.length; i++)
    { if (bestTVShowsByGenre[key] === tvShow) {
    return [i]
  }
}
}
*/
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

// ==== Test 1: A Matching and Unmatching String ====
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// ==== Test 2: Not A String ====
assertEqual(findKeyByValue(bestTVShowsByGenre, 5), undefined);
