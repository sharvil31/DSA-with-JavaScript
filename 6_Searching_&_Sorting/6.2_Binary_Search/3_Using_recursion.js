// find index

const recursionSearch = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);

  if (target === arr[middle]) {
    return middle;
  } else if (target > arr[middle]) {
    return recursionSearch(arr, target, middle + 1, right);
  } else {
    return recursionSearch(arr, target, left, middle - 1);
  }
};

console.log(recursionSearch([1, 2, 3, 4, 5], 5));