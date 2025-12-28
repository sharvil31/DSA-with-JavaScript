// Convert string to uppercase / lowercase (without built-ins)

const convertToUpper = (str) => {
  let uppercase = "";
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      uppercase += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      uppercase += char;
    }
  }

  return uppercase;
};

console.log(convertToUpper("Hello"));


const convertToLower = (str) => {
  let lowercase = "";
  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      lowercase += String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      lowercase += char;
    }
  }

  return lowercase;
};

console.log(convertToLower("HELLO"));
