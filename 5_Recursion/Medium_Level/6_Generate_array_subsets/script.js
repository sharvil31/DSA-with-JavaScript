const generateSubsets = (arr) => {
  let res = [];

  const helper = (start, temp) => {
    res.push([...temp]);

    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      helper(i + 1, temp);
      temp.pop();
    }
  };

  helper(0, []);
  return res;
};

console.log(generateSubsets([1, 2, 3]));
