const middle = function(array) {

  let middleNum = [];
  let middleLow = [];
  let middleHi = [];

  if (array.length <= 2) {
    return middleNum
  } else if (array.length%2 != 0) {
    middleNum.push(array[Math.round((array.length - 1) / 2)]);
    //console.log(middleNum)
  } else {
    middleLow.push(array[Math.floor((array.length - 1) / 2)]);
    middleHi.push(array[Math.ceil((array.length - 1) / 2)]);
    middleNum = middleLow.concat(middleHi);
  }
  return middleNum;
};

console.log(middle([1,2,3,5,6]))
console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4]))
