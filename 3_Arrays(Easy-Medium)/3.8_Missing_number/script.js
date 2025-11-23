const nums = [0, 2];

const findMissingNum = (nums) => {
  //   if (!nums.includes(0)) return 0;

  //   let missNum = 0;
  //   let minNum = Math.min(...nums);
  //   for (let i = 0; i < nums.length; i++) {
  //     if (!nums.includes(minNum + i)) {
  //       missNum = minNum + i;
  //     }
  //   }

  //   if (missNum === 0) missNum = Math.max(...nums) + 1;

  //   return missNum;

  let n = nums.length
  let totalSum = n * (n + 1) / 2;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return totalSum - sum
};

console.log(findMissingNum(nums));


// Time Complexity O(n)
// Space Complexity O(1)