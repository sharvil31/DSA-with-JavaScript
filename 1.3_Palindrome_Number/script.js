let num = 121;
let numcopy = num;
let reversed = 0;

while (numcopy > 0) {
  const digit = numcopy % 10;
  reversed = reversed * 10 + digit;
  numcopy = Math.floor(numcopy / 10);
}

console.log(num === reversed ? "Palindrome" : "Not Palindrome");
