// const replaceOcc = (str, char, i = 0) => {
//   if (i === str.length) return str;

//   if (str[i] === char) {
//     str = str.slice(0, i) + "x" + str.slice(i + 1);
//   }

//   return replaceOcc(str, char, i + 1);
// };

// console.log(replaceOcc("banana", "a"));



// Backtracking
const replaceOcc = (str, char) => {
  if (str.length === 0) return "";

  let curr = str[0] === char ? "x" : str[0];

  return curr + replaceOcc(str.slice(1), char);
};

console.log(replaceOcc("banana", "a"));
