const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

console.log(search(nums, target));
