const arr = [4, 9, 0, 2, 8, 7, 1];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}

console.log(largest);
console.log(secondLargest);