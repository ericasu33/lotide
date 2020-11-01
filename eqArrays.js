const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (actual, expected) => {
  let output = true;
  if (actual.length !== expected.length) {
    return false;
  } else for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual)) {
      output = output && eqArrays(actual[i], expected[i]);
    } else if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return output;
};

console.log(eqArrays([[2, 3], 4], [[2, 3], [4]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

// console.log(eqArrays(["1", "2", 3], ["3","2","1","1"])); //false;
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 3, 3])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// console.log(eqArrays([1,2,3], [1,2,4])); //false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS