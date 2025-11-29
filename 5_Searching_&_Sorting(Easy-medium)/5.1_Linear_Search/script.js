const arr = [4, 9, 1, 0, 2]; // target 0 -> return index

const findNumIdx = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
};

console.log(findNumIdx(arr, 0));
