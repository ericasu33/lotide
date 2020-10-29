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

assertArraysEqual([1, 2, 3], [1, 2, 4, 5]); // => fail
assertArraysEqual([1, 2, 3], [2, 3, 3]); // => fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => pass
assertArraysEqual([1], [1]); // => pass