const generateSubsets = (arr) => {
  const res = [[]];

  const helper = (start) => {
    if (start === arr.length) return;
    let temp = [];

    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      res.push([...temp]);
      
    }

    helper(start + 1);
  };

  helper(0);

  return res;
};

console.log(generateSubsets([1, 2, 3]));