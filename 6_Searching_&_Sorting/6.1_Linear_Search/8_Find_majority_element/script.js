const findMajorityElem = (arr) => {
  let currNum = null;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      currNum = num;
      count++;
    } else if (num === currNum) {
      count++;
    } else {
      count--;
    }
  }

  return currNum;
};

console.log(findMajorityElem([3, 3, 1, 2, 3])); // element appear more than n/2 (more than half of array)
