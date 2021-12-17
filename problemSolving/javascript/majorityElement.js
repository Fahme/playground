function majorityElementBoyer(arr) {
  let candidate = arr[0];
  let counter = 1;

  for (let i = 1; i < arr.length; i++) {
    if (candidate == arr[i]) {
      counter += 1;
    } else {
      counter -= 1;
    }

    if (counter == 0) {
      candidate = arr[i];
      counter += 1;
    }
  }

  return candidate;
}

console.log(majorityElementBoyer([1, 3, 2, 1, 4, 1]));