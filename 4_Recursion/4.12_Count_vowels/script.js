const countVowels = (str, i = 0) => {
  if (i === str.length) return 0;

  const isVowel = ["a", "e", "i", "o", "u"].includes(str[i].toLowerCase()) ? 1 : 0;

  return isVowel + countVowels(str, i + 1);
};

console.log(countVowels("hello"));