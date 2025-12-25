const arr = [1, 1, 0, 1, 1, 0, 1, 1, 1];

const maxConsOnes = (arr) => {
  let onesCount = 0;
  let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 1) {
        maxCount = Math.max(maxCount, onesCount);
        onesCount = 0;
      } else {
        onesCount++;
      }
    }

    return Math.max(maxCount, onesCount);

  // shorter version
  // for (const num of arr) {
  //   onesCount = num === 1 ? onesCount + 1 : 0;
  //   maxCount = Math.max(maxCount, onesCount);
  // }

  // return maxCount;
};

console.log(maxConsOnes(arr));


// Time Complexity O(n)
// Space Complexity O(1)