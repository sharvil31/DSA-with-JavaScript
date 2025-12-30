const lastOccurrence = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      ans = middle;
      left = middle + 1;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return ans;
};

console.log(lastOccurrence([1, 2, 2, 2, 3, 4, 5], 2));