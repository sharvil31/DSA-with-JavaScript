const arr = [3, 1, 5, 4, 1, 5, 3];

// const findSingleNum = (nums) => {
//   const obj = {};

//   //   for (let i = 0; i < nums.length; i++) {
//   //     if (obj[nums[i]] > 0) {
//   //       obj[nums[i]]++;
//   //     } else {
//   //       obj[nums[i]] = 1;
//   //     }
//   //   }
//   //   return +Object.keys(obj).find((key) => obj[key] === 1);

//   // optimized version of 1st solution
//   //   for (let i = 0; i < nums.length; i++) {
//   //     obj[nums[i]] = (obj[nums[i]] || 0) + 1;
//   //   }

//   //   return +Object.keys(obj).find((key) => obj[key] === 1);

// };

// Most optimized version (using Bitwise XOR)
const findSingleNum = (nums) => {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

console.log(findSingleNum(arr));
