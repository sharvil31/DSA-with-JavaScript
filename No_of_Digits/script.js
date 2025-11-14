
let num = 11111111;
let digitCount = 0;

while (num > 0) {
  num = Math.floor(num / 10);
  digitCount++;
}

console.log(digitCount);