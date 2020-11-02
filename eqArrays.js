const eqArrays = (actual, expected) => {
  let output = true;
  if (actual.length !== expected.length) {
    return false;
  }
  
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i])) {
      output = output && eqArrays(actual[i], expected[i]);
    } else if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return output;
};

module.exports = eqArrays;