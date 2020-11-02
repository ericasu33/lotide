const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
  let output = true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else for (let key of Object.keys(obj1)) {
    // if (!obj2[key]) {return false};
    // don't need this because we can test this with the else if statement at the bottom.
    // As if the key doesn't exist, the value would be undefined.
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      output = output && eqArrays(obj1[key], obj2[key]); //using && cuz of iteration
      //not using ||
      //b/c if obj1, obj2 were diff type
      // where one obj has no arr at all
      // the last else if statement will test the case and return false
      // as array !== string.
      // In additon if we use || the eqArrays for loop (index) comparison will mess up.
    } else if (typeof obj1[key] === "object" || typeof obj2[key] === "object") {
      output = output && eqObjects(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      output = false; //because we are returning false, its ok to go without &&
    }
  }

  return output;
};

module.exports = eqObjects;
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y:0, z: 1 }, y:0})); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { b: 2, a: { z: 1, y: 0 } })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y:0, z: 1 }, y:0, b:2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

const bestTVShowsByGenre = {
  drama:  "The Wire",
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
};

const bestTVShowsByGenre2 = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abd = { a: "1", b: "2", d: "3"};

const cd = { c: "1", d: ["2", 3]};
const ce = { c: ["2", 3], d: "1"};
const dc = { d: ["2", 3], c: "2" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(bestTVShowsByGenre, bestTVShowsByGenre2), true);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abd, abc), false);
assertEqual(eqObjects(cd, ab), false);

assertEqual(eqObjects(cd, dc), false);
assertEqual(eqObjects(cd, ce), false);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(dc, cd), false);

console.log(eqObjects(bestTVShowsByGenre, bestTVShowsByGenre2)); // true
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false

console.log(eqObjects(cd, dc)); // => false
console.log(eqObjects(cd, ce)); // => false
console.log(eqObjects(cd, cd2)); // => false
