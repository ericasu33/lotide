const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    } 
  }

  return true;
};

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) ?
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
};

const middle = (arr) => {
  let midValArr = [];
  const arrLength = arr.length;

  if (!arrLength || arrLength === 1 || arrLength === 2 ){
    return [];
  } else if (arrLength % 2 === 0) { //even
    midValArr.push(arr[arrLength / 2] - 1);  //arr[1]
    midValArr.push(arr[(arrLength / 2)]); //arr[2]
  } else {
    midValArr.push(arr[Math.floor(arrLength / 2)]) //arr[1]
  }
  return midValArr;
}

assertArraysEqual((middle([1,2,3,4])), [2, 3]); // => [2, 3]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3,4]); // => [3, 4]

assertArraysEqual((middle([1, 2, 3])), [2]); // => [2]
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3, 3]); // => [3]

assertArraysEqual((middle([1])), []); // => []
assertArraysEqual((middle([1, 2])), [1]); // => []