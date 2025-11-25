const recursion = (num) => {
  if (num === 0) return; // Base case is most important in recursion to avoid infinite recursion. It leads to stack overflow

  console.log(num);
  num -= 1;
  recursion(num);
};

recursion(10);
