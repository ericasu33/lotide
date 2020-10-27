const assertArraysEqual = (actual, expected) => {
  let compare = false;
  
  if (actual.length !== expected.length) {
    compare = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      compare = actual[i] === expected[i];
    }
  }

  compare ?
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should PASS