const reverseStr = (str, i = 0, j = str.length - 1) => {
  if (i >= j) return str;
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;

  return reverseStr(str, i + 1, j - 1);
};

console.log(reverseStr("hello"));