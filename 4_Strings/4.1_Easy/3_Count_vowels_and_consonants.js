// Count vowels and consonants

const count = (str) => {
  let res = { vowels: 0, consonants: 0 };
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) res.vowels++;
      else res.consonants++;
    }
  }

  return res;
};

console.log(count("hi 123!"));
