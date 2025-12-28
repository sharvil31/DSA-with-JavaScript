const removeSpaces = (str) => {
  let res = "";

  for (let char of str) {
    if (char !== " ") res += char;
  }

  return res;
};

console.log(removeSpaces(" Hello World from JS "));
