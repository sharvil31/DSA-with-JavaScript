const moveZerosToEnd = (arr) => {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      pos++;
    }
  }

  return arr;
};

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
