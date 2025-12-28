// Find length of string without using .length

const findLength = (str) => {
  //   let length = 0;

  //   for (let char of str) length++;

  //   return length;

  //// using While Loop
  let char = 0;

  while (str[char] !== undefined) char++;

  return char;
};

console.log(findLength("Hello World"));
