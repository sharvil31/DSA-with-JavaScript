const reverseInt = (n, rev = 0) => {
  if (n === 0) return rev;

  rev = rev * 10 + (n % 10);

  return reverseInt(Math.floor(n / 10), rev);
};

console.log(reverseInt(1234));
