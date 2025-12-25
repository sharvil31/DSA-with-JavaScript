const generateSubStrings = (str) => {
  let res = [];

  const helper = (start) => {
    if (start === str.length) return;

    let temp = "";

    for (let i = start; i < str.length; i++) {
      temp += str[i];
      res.push(temp);
    }

    helper(start + 1);
  };

  helper(0);
  
  return res;
};

console.log(generateSubStrings("abc"));