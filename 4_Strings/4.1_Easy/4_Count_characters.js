// Count Characters

const countChars = (str) => {
  const freq = {};

  for (let char of str.toLowerCase()) {
    // if (freq[char]) {
    //   freq[char]++;
    // } else {
    //   freq[char] = 1;
    // }

    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
};

console.log(countChars("Hello World"));