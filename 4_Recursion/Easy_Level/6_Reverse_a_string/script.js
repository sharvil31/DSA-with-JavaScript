const reverseStr = (str) => {
  if (str.length <= 1) return str;

  return reverseStr(str.slice(1)) + str[0];
};

console.log(reverseStr("hello"));


// (ello) + h// olle + h = olleh
// (llo) + e// oll + e = olle
// (lo) + l// ol + l = oll
// (o) + l// ol
// return o
