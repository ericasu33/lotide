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

//two param: array to map, callbak fcn
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
const heroes = [
  {name: "Tom"},
  {name: "John"},
  {name: "Same"},
];

const map = (arr, callback) => {
  const resultArr = [];
  
  for (let item of arr) {
    resultArr.push(callback(item));
  }

  return resultArr;
};

const results = map(words, word => word[0]);
const results1 = map(numbers, number => number * 2);
const heroName = map(heroes, hero => hero.name);

assertArraysEqual(results, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, [2, 4, 6, 8, 10]);
assertArraysEqual(heroName, ["Tom", "John", "Same"]);