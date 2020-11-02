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

const letterPositions = (sentence) => {
  const result = {};

  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i])
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPositions;

const results1 = letterPositions("lighthouse in the house");
assertArraysEqual(results1["l"], [0]);
assertArraysEqual(results1["h"], [3, 5, 15, 18]);
assertArraysEqual(results1["e"], [9, 16, 22]);

// letterPositions("hello yall");
// letterPositions("lighthouse in the house");