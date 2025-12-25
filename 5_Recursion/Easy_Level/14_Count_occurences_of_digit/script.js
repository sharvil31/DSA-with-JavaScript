const countOccur = (n, digit) => {
  if (n === 0) return digit === 0 ? 1 : 0;

  const occur = n % 10 === digit ? 1 : 0;

  return occur + countOccur(Math.floor(n / 10), digit);
};

console.log(countOccur(1, 1));
