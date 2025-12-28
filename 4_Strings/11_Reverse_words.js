const reverseWords = (sentence) => {
  let res = "";
  let word = "";

  for (let char of sentence) {
    if (char === " ") {
      res += word + " ";
      word = "";
    } else word = char + word;
  }

  res += word;
  return res;
};

console.log(reverseWords("Hello World JS"));
