// flatten out one level of nested array

const flatten = (arr) => {
  let flattenedArr = [];
  for (let val of arr) {
    if (!Array.isArray(val)) {
      flattenedArr.push(val);
    } else {
      flattenedArr = [...flattenedArr,...val];
    }
  }
  return flattenedArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])
console.log(flatten(["Tom", "Sam", ["Pete", "Ken"], 5, [6]]));