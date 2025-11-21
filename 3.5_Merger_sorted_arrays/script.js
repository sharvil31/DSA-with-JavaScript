let arr1 = [1, 2, 3];
let arr2 = [2, 5, 6];

// const mergeArrays = (arr1, arr2) => {
//   const l1 = arr1.length;
//   const l2 = arr2.length;

//   let arr1Copy = [...arr1];

//   let p1 = 0;
//   let p2 = 0;

//   for (let i = 0; i < l1 + l2; i++) {
//     if (p2 >= l2 || (p1 < l1 && arr1Copy[p1] < arr2[p2])) {
//       arr1[i] = arr1Copy[p1];
//       p1++;
//     } else {
//       arr1[i] = arr2[p2];
//       p2++;
//     }
//   }

//   return arr1;
// };



// Much Optimized Approach
const mergeArrays = (arr1, arr2) => {
  let p1 = arr1.length - 1;
  let p2 = arr2.length - 1;

  for (let i = arr1.length + arr2.length - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && arr1[p1] > arr2[p2]) {
      arr1[i] = arr1[p1];
      p1--;
    } else {
      arr1[i] = arr2[p2];
      p2--;
    }
  }

  return arr1
};

console.log(mergeArrays(arr1, arr2));
