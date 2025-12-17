const generateSubsets = (arr) => {
  const res = []; // [[], [1], [1, 2], [1, 2, 3], [1, 3], []]

  const helper = (start, current) => {
    res.push([...current]); // Add current subset

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]); // Choose element
      helper(i + 1, current); // Recurse
      current.pop(); // Backtrack (undo choice)
    }
  };

  helper(0, []);
  return res;
};

console.log(generateSubsets([1, 2, 3]));