const assertArraysEqual = (actual, expected) => {
  let compare = false;
  
  if (actual.length !== expected.length) {
    compare = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      compare === true ? 
      compare = actual[i] === expected[i]:
      compare = false
    }
  }
  compare ?
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 4]); // => fail
assertArraysEqual([1, 2, 3], [2, 3, 3]); // => fail