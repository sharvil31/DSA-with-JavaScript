const arr = [5, 3, 0, 2, 6, 7, 1];

const sumOfOddNums = (n) => {
  if (n < 0) return 0;

  if (arr[n] % 2 !== 0) {
    return arr[n] + sumOfOddNums(n - 1);
  } else {
    return sumOfOddNums(n - 1);
  }
};

console.log(sumOfOddNums(arr.length - 1));


// time complexity = O(n)
// space complexity = O(n)