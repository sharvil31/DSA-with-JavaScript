const isPalindrome = (arr) => {
  if (arr.length <= 1) return true;

  if (arr[0] !== arr[arr.length - 1]) return false;

  return isPalindrome(arr.slice(1, arr.length - 1));
};

console.log(isPalindrome([1, 2, 3, 2, 1]));
