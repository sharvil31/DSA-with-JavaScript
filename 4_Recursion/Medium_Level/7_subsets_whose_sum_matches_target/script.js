const findSubsets = (arr, target) => {
  let res = [];

  const helper = (start, temp, sum) => {
    if (sum === target) res.push([...temp]);

    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      helper(i + 1, temp, sum + arr[i]);
      temp.pop();
    }
  };

  helper(0, [], 0);
  return res;
};

console.log(findSubsets([1, 2, 3], 3));
