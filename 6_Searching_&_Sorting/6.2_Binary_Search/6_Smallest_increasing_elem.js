const smallestIncreasing = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (right >= left) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] > target) {
      ans = arr[middle];
      right = middle - 1;
    } else if (arr[middle] <= target) {
      left = middle + 1;
    }
  }

  return ans;
};

console.log(smallestIncreasing([3, 5, 8, 12, 17], 10));