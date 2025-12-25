const findDuplicate = (arr) => {
  let obj = {};

  for (let num of arr) {
    if (obj[num]) return num;
    else obj[num] = 1;
  }

  return "No Duplicate"
};

console.log(findDuplicate([1, 3, 4, 2, 2]));