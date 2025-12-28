const capitalize = (sentence) => {
  let res = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if ((i === 0 || sentence[i - 1] === " ") && char >= "a" && char <= "z") {
      res += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      res += char;
    }
  }

  return res;
};

console.log(capitalize("hello world javascript"));