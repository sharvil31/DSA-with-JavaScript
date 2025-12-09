const countWords = (str, i = 0) => {
  str = str.trim();
  if (i === str.length) return 1;

  let count = str[i] === " " && str[i + 1] !== " " ? 1 : 0;

  return count + countWords(str, i + 1);
};

console.log(countWords("my name is sharvil"));
