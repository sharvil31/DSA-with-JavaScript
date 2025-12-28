const replaceSpaces = (str) => {
  let res = "";

  for (let char of str) {
    res += char === " " ? "-" : char;
  }

  return res;
};

console.log(replaceSpaces("Hello World JS"));
