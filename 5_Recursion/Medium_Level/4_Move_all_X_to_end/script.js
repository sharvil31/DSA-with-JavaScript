const moveXToEnd = (str) => {
  if (str.length === 0) return "";

  const rest = moveXToEnd(str.slice(1));

  if (str[0] === "x") return rest + "x";

  return str[0] + rest;
};

console.log(moveXToEnd("axxbdxce"));