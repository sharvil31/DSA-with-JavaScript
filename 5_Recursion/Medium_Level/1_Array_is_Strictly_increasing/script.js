const strictlyIncreasing = (arr, i = 0) => {
  if (i === arr.length - 1 || arr.length <= 1) return true;

  if (arr[i] >= arr[i + 1]) return false;

  return strictlyIncreasing(arr, i + 1);
};

console.log(strictlyIncreasing([]));



// // backtracing versiom
// const strictlyIncreasing = (arr, i = 0) => {
//   if (i === arr.length - 1) return true;

//   const curr = strictlyIncreasing(arr, i + 1);

//   if (!curr) return false;

//   return arr[i] <= arr[i + 1];
// };

// console.log(strictlyIncreasing([1, 3, 2, 7]));