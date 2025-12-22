const findMinMax = (arr) => {
  if (arr.length === 0) return;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
};

console.log(findMinMax([5, 4, 8, 1, 10, 6, 2]));
