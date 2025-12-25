const arr = [7, 1, 5, 3, 6, 4];

const getMaxProfit = (arr) => {
  let minVal = arr[0];
  let maxVal = 0;

  for (let i = 1; i < arr.length; i++) {
    let profit = arr[i] - minVal;
    if (profit > maxVal) {
      maxVal = profit;
    }

    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }

  console.log(maxVal);
};

getMaxProfit(arr)