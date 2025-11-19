const arr = [3, 2, 2, 3];

const removeElement = (val) => {
  let x = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  return x;
};

console.log(removeElement(3));
