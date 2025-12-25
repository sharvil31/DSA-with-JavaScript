const nums = [5, 0, 1, 2, 7, 9, 3, 4];

for (let i = 0; i < nums.length - 1; i++) {
  let isSwapped = false;
  for (let j = 0; j < nums.length - 1 - i; j++) {
    if (nums[j] > nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;

      isSwapped = true;
    }
  }

  if (!isSwapped) break;
}

console.log(nums);

// time complexity = O(n^2)
// space complexity = O(1) // constant
