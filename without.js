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

const without = (sourceArr, itemsToRemoveArr) => {
  let newArr = [...sourceArr];
  let indexToRemove;

  for (let i = 0; i < itemsToRemoveArr.length; i++) {
    // console.log(`itemsToRemove: ${itemsToRemoveArr[i]}`);
    indexToRemove = newArr.indexOf(itemsToRemoveArr[i]);
    // console.log(`indexToRemove: ${indexToRemove}`);
    if (indexToRemove > -1) {
      newArr.splice(indexToRemove, 1);
      // console.log(newArr);
    }
  }
  // console.log(`source ${sourceArr}`);
  return newArr;
};

// console.log(without([1, 2, 3], [2, 1, 4])) // => [3]
// console.log(without(["1", "2", "3"], [3, "1", "2"])) // => ["3"]
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);