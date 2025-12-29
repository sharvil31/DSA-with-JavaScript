const firstOccurrence = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      ans = middle;        // store answer
      right = middle - 1;  // move left
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return ans;
};

console.log(firstOccurrence([1, 2, 2, 2, 3, 4, 5], 2)); // 1
