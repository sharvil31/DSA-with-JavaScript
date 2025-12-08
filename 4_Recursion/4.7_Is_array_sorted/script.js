const isSorted = (arr, i = 0) => {
  if (i === arr.length) return true;
  if (arr[i] > arr[i + 1]) return false;

  return isSorted(arr, i + 1);
};

console.log(isSorted([1, 2, 10, 4, 5]));
