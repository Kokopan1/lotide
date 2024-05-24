//which will return all the indices (zero-based positions) in the string where each character is found.


// maybe use a push on the zero-based position?
//const indexOfFirst = paragraph.indexOf(searchTerm);

// if the character is x, return index position of where x is
/*
ToDo
first we have to find the character
if there is no character, we have to create a character property and the array, we have to push? the item to the array
if we have a character property then we just have to add the index value to the array
*/
const letterPositions = function(strings) {
  let objKeyLetter = {};
  let objKeyNumber = []
  
  for (let i = 0; i < strings.length; i++){
    //console.log([i])
    if (!objKeyLetter[strings[i]]) {
       objKeyLetter[strings[i]] = objKeyNumber.push(i)
       console.log(objKeyLetter)
    } else {
      objKeyLetter[strings[i]] += objKeyNumber.push(i)
    }
  }
  //delete objKeyLetter[' ']; //delete the space, dont need it
  //return objKeyLetter;
};
console.log(letterPositions('hi ho'));

/*
const countLetters = function(strings) {
  let objKeyLetter = {};
  for (const letter of strings) {
    if (!objKeyLetter[letter]) {
      objKeyLetter[letter] = 1; //if objKeyLetter is false = not there, then initialze it
    } else {
      objKeyLetter[letter]++; //if its there, add 1
    }
    
  }
  delete objKeyLetter[' ']; //delete the space, dont need it
  return objKeyLetter;
};
console.log(countLetters('heeey there'));
*/