const arr = [3, 4, 7, 5, 1, 2];

for (let i = 1; i < arr.length; i++) {
  let curr = arr[i];
  let prev = i - 1;

  while (arr[prev] > curr && prev >= 0) {
    arr[prev + 1] = arr[prev];
    prev--;
  }
  arr[prev + 1] = curr;
}

console.log(arr);

// time complexity = O(n^2)
// space complexity = O(1) // constant
