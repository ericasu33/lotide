const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (obj, objVal) => {
  // for (key in obj) {
  //   // console.log(key);
  //   // console.log(obj[key]);
  //   if (objVal === obj[key]) {
  //     return key;
  //   }
  // }
  for (const value of Object.keys(obj)) {
    if (objVal === obj[value]) {
      return value;
    }
  }
};

// findKeyByValue(bestTVShowsByGenre)




// findKeyByValue(bestTVShowsByGenre, "The Wire");
// findKeyByValue(bestTVShowsByGenre, "That '70s Show");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");