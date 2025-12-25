const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (arr) => {
  let x = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }

  return (x + 1)
};

console.log(removeDuplicates(arr))