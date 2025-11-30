// * Binary Search only works on a sorted array (ascending or descending)
//
// Here array is sorted in ascending order.
// In Binary Search:
// 1) We calculate the middle index.
// 2) If nums[middle] === target → return middle.
// 3) If target > nums[middle] → search in right half (left = middle + 1).
// 4) If target < nums[middle] → search in left half (right = middle - 1).
// We repeat this until right < left (meaning the element is not found).

const nums = [-1, 0, 3, 5, 9, 12]; // target: 9 → output: index 4

const findIdx = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

console.log(findIdx(nums, 9)); // Output: 4

// time complexity = O(log n) // logarithmic
// space complexity = O(1) // constant

// find first occurence of given target
const findFirstOcc = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let occ = -1;

  while (right >= left) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      occ = middle;
    }

    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return occ;
};

console.log(findFirstOcc(nums, 3));

// time complexity = O(log n) // logarithmic
// space complexity = O(1) // constant
