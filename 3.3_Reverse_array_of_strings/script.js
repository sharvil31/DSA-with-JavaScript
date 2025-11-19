const arr = ["s", "h", "a", "r", "v", "i", "l"];

const removeDuplicates = (arr) => {
  const n = arr.length;

  for (i = 0; i < Math.floor(n / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }

  return arr;
};

console.log(removeDuplicates(arr));
