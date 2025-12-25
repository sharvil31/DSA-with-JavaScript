const countEvenAndOddNums = (arr) => {
  let res = { even: 0, odd: 0 };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) res.even++;
    else res.odd++;
  }

  return res;
};

console.log(countEvenAndOddNums([1, 2, 3, 4, 5]));
