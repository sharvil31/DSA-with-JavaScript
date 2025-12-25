const findLast = (arr, n, i = 0, occ = 0) => {
  if (i === arr.length) return occ;
  if (arr[i] === n) occ = i;

  return findLast(arr, n, i + 1, occ);
};

console.log(findLast([1, 2, 2, 3, 5, 2, 3], 3));
