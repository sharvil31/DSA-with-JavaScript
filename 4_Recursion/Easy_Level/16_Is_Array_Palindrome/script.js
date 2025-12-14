const isPalindrome = (arr, i = 0, j = arr.length - 1) => {
  if (i >= j) return true;

  if (arr[i] !== arr[j]) return false;

  return isPalindrome(arr, i + 1, j - 1);
};

console.log(isPalindrome([1, 2, 2, 1]));
