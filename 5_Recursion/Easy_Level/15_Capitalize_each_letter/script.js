const capitalize = (str) => {
  if (str.length === 0) return "";

  const letter = str[0].toUpperCase();

  return letter + capitalize(str.slice(1));
};

console.log(capitalize("hello world"));
