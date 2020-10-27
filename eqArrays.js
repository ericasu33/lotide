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
    // console.log(`the compare value now: ${compare}`);
    for (let i = 0; i < actual.length; i++) {
      compare === true ? 
      compare = actual[i] === expected[i]:
      compare = false
      // console.log(`actual: ${actual[i]}`)
      // console.log(`expected: ${expected[i]}`);
      // console.log(compare);
      // if (compare === false){
      //   // console.log("I worked");
      //   break;
    }
  }
    
  return compare;
};

// console.log(eqArrays(["1", "2", 3], ["3","2","1","1"])); //false;
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 3, 3])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// console.log(eqArrays([1,2,3], [1,2,4])); //false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS