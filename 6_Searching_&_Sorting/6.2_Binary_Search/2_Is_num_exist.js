const findNumExist = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
      return true;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
};

console.log(findNumExist([1, 2, 3, 4, 5], 6));