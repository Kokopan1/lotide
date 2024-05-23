const middle = function(array) {

  let middleNum = []

  if (array.length <= 2) {
    return middleNum
  } else if (array.length%2) {
    middleNum.push(array[Math.round((array.length) / 2)]);
    middleNum.push(array[Math.round((array.length) / 2)]);
    console.log(middleNum)
  } else {
  
    middleNum.push(array[Math.round((array.length - 1) / 2)]);
    console.log(middleNum)
  }
  return middleNum
};

console.log(middle([1,2,3,4,5,6]))
