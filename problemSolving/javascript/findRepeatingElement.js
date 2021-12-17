function findRepeatingElement(arr, target, left, right) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] == target) {
    return mid;
  } else if (target < arr[mid]) {
    return findRepeatingElement(arr, target, left, mid - 1);
  } else {
    return findRepeatingElement(arr, target, mid + 1, right);
  }
}

const arr = [1, 2, 3, 4, 4];

console.log(findRepeatingElement(arr, 3, 0, arr.length));
