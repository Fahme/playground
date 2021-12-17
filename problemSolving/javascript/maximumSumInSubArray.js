function maximumSumInSubArray(arr, k) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[i - (k - 1)];
    }
  }

  return maxSum;
}

console.log(maximumSumInSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// currentMax = 17;
// currentsum = 17;
