const palindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Case-insensitive & ignore spaces

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(palindrome("A man, a plan, a canal: Panama"));
