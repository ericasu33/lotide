// return the first key for which callback returns a truthy value

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const name of Object.keys(object)) { //gives the titles
    // console.log(object[name]); //list the star objects
    if (callback(object[name])) {
      return name;
    }
  }
};

module.exports = findKey;

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "noma");