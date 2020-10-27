const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (actual, expected) => {
let compare = false;

  if (actual.length !== expected.length) {
    compare = false;
  } else {
    for (let i = 0; i < actual.length; i++){
      compare = actual[i] === expected[i]
      }
    }
    
return compare;
};

console.log(eqArrays(["1", "2", 3], ["3","2","1","1"])) //false;
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

console.log(eqArrays([1,2,3], [1,2,4])) //false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS