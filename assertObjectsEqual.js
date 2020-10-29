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

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let val of Object.keys(obj1)) {
    if (Array.isArray(obj1[val]) && Array.isArray(obj2[val])) {
      if (!eqArrays(obj1[val], obj2[val])) { 
        return false;
      }
    } else if (obj1[val] !== obj2[val]) {
      return false; 
    }
  }
  return true;
};
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  eqObjects(actual, expected) ?
  console.log(`😊😊😊 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
  console.log(`😡😡😡 Asserion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const ce = { c: ["2", 3], d: "1"};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);  //t
assertObjectsEqual(ab, abc); //f

assertObjectsEqual(cd, dc); //t
assertObjectsEqual(cd, ce); //f
assertObjectsEqual(cd, cd2); //f