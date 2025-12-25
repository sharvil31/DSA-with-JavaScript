const findLongestWord = (sentence) => {
  let res = "";
  let currWord = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      res = currWord.length > res.length ? currWord : res;
      currWord = "";
    } else {
      currWord += sentence[i];
    }
  }

  return res;
};

console.log(findLongestWord("Hello World javascript"));
