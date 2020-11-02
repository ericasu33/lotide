const assert = require("chai").assert;
const tail = require("../tail");

describe("#tailTest", () => {
  it("should return Lightouse Labs", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("array length = 2", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  it("original array is not modified", () => {
    let arr = ["Hi", "Lighthouse", "Labs"];
    tail(arr);
    assert.deepEqual(arr.length, 3);
  });
});


// // // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!