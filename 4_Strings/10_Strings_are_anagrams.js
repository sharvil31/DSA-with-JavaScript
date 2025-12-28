const isAnagram = (s1, s2) => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if (s1.length !== s2.length) return false;

  let res = {};

  for (let char of s1) res[char] = (res[char] || 0) + 1;

  for (let char of s2) {
    if (!res[char]) return false;
    res[char]--;
  }

  return true;
};

console.log(isAnagram("listen", "silent"));