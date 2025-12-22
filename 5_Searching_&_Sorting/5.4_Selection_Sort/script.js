const nums = [7, -1, 5, 4, -3, 2];

for (let i = 0; i < nums.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] < nums[min]) {
      min = j;
    }
  }

  if (nums[i] !== nums[min]) {
    let temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
}

console.log(nums);

// time complexity = O(n^2)
// space complexity = O(1) // constant
