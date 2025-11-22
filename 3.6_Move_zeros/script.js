let arr = [0, 1, 0, 3, 12, 0, 8, 100, 0, 0, 32, 0];

const moveZeros = (arr) => {
  let pos = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      let temp = arr[pos];
      arr[pos] = arr[i]; 
      arr[i] = temp;
      pos--;
    }
  }

  return arr;
};

console.log(moveZeros(arr));
