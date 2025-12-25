const findIndices = (arr, target) => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) res.push(i);
  }

  return res;
};

console.log(findIndices([2, 4, 1, 2, 2, 7], 2));