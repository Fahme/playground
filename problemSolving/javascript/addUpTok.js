function addUpToKPositiveOnly(arr, target) {
  let currentSum = 0;
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    while (arr[i] + arr[j] < target && currentSum < target) {
      i++;
    }

    console.log(arr[i]);
    j++;
  }
}

addUpToKPositiveOnly([1, 7, 4, 3, 1, 2, 1, 5, 1], 7);
i;
j;

const current = 1;
const target = 7;
