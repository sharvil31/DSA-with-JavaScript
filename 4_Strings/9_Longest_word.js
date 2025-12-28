const findLongestWord = (sentence) => {
  let res = "";
  let word = "";

  for (let char of sentence) {
    if (char === " ") {
      if (word.length > res.length) res = word;
      word = "";
    } else word += char;
  }

  return word.length > res.length ? word : res;
};

console.log(findLongestWord("Hello from Javascript"));
