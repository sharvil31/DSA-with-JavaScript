// const allIndices = (arr, n, res = [], i = 0) => {
//   if (i === arr.length) return res;

//   if (arr[i] === n) res.push(i);

//   return allIndices(arr, n, res, i + 1);
// };

// console.log(allIndices([1,2,3,2,2], 2));


// Backtracking
const allIndices = (arr, n, i = 0) => {
  if (i === arr.length) return [];

  const curr = allIndices(arr, n, i + 1);
  if (arr[i] === n) curr.unshift(i);
  return curr;
};

console.log(allIndices([1, 2, 3, 2, 2], 2));
