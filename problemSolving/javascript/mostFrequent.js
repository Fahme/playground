function mostFrequent(arr) {
  arr.sort();

  let maxCount = 1;
  let currentCount = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      currentCount += 1;
    } else {
      if (maxCount < currentCount) {
        maxCount = currentCount;
      }

      currentCount = 0;
    }
  }

  return maxCount;
}

console.log(mostFrequent([40, 50, 30, 40, 50, 30, 30, 50]));
