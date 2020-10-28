const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Asserion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const noSpace = sentence.split(" ").join("");

  const results = {};
  for (const letter of noSpace) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  
  return results;
};

const results1 = countLetters("light house in the house");

assertEqual(results1["l"], 1);
assertEqual(results1["h"], 4);
assertEqual(results1["e"], 3);