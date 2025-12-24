const isArrSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }

  return true;
};

console.log(isArrSorted([1, 2, 4, 5, 6]));