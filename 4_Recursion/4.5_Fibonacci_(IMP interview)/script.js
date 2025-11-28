// Given n, calculate F(n). -> number present on n position in fibonacci series

// [0, 1, 2, 3, 5, 8]

// Iterative Approach
const findNthNum = (n) => {
  //// With Array
  // let arr = [0, 1];
  //   for (i = 2; i <= n; i++) {
  //     let sum = arr[i - 1] + arr[i - 2];
  //     arr.push(sum);
  //   }
  //   return arr[n];

  // time complexity = O(n)
// space complexity = O(n) // storing every Fibonacci number in an array of size n.


  // Without Array
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;

  for (i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }
  return prev2;

  // time complexity = O(n)
// space complexity = O(1) // not using any extra array space
};

console.log(findNthNum(6));
