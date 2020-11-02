const middle = (arr) => {
  let midValArr = [];
  const arrLength = arr.length;

  if (arrLength <= 2) {
    return [];
  } else if (arrLength % 2 === 0) { //even
    midValArr.push(arr[arrLength / 2] - 1);  //arr[1]
    midValArr.push(arr[(arrLength / 2)]); //arr[2]
  } else {
    midValArr.push(arr[Math.floor(arrLength / 2)]);//arr[1]
  }
  return midValArr;
};

module.exports = middle;
