const removeDuplicates = (str) => {
  let res = "";
  let freq = {};

  for (let char of str) {
    if (!freq[char] || char === " ") {
      freq[char] = 1;
      res += char;
    }
  }

  return res;
};

console.log(removeDuplicates("Hello World Javascript"));
