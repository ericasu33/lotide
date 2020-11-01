const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
  }
};

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
    // console.log(val);
    // console.log(obj2[val]);
    // if (!obj2[val]) {
    //   return false;
    // } 
    // don't need this because we can test this with the else if statement at the bottom. 
    // As if the key doesn't exist, the value would be undefined.
    if (Array.isArray(obj1[val]) && Array.isArray(obj2[val])) {
      //not using || 
      //b/c if obj1, obj2 were diff type
      // where one obj has no arr at all
      // the last else if statement will test the case and return false 
      // as array !== string. 
      // In additon if we use || the eqArrays for loop (index) comparison will mess up.
      if (!eqArrays(obj1[val], obj2[val])) { 
        //if we test if its true, 
        //the function will stop here 
        //even if there is still more cases to test in the object.
        return false;
      }
    } else if (!Array.isArray(obj1[val] && !Array.isArray(obj2[val]))) {
      if (typeof obj1[val] === "object") {
        return eqObjects(obj1[val], obj2[val]);
      }
    } else if (obj1[val] !== obj2[val]) {
      return false; //value in obj1 != value in obj2
    }
  }

  return true;
};

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y:0, z: 1 }, y:0, b:2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

// const bestTVShowsByGenre = {
//   drama:  "The Wire",
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
// };

// const bestTVShowsByGenre2 = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const abd = { a: "1", b: "2", d: "3"}; 

// const cd = { c: "1", d: ["2", 3]};
// const ce = { c: ["2", 3], d: "1"};
// const dc = { d: ["2", 3], c: "2" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(bestTVShowsByGenre, bestTVShowsByGenre2), true);
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(abd, abc), false);
// assertEqual(eqObjects(cd, ab), false);
// console.log(eqObjects(cd, ab))

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, ce), false);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(dc, cd), false);

// console.log(eqObjects(bestTVShowsByGenre, bestTVShowsByGenre2)); // true
// console.log(eqObjects(ab, ba)); // => true
// console.log(eqObjects(ab, abc)); // => false

// console.log(eqObjects(cd, dc)); // => true
// console.log(eqObjects(cd, ce)); // => false
// console.log(eqObjects(cd, cd2)); // => false
