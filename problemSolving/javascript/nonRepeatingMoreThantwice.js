//You are given a sorted array with repeated numbers. [1,1,1,3,3,3,3,3,4,5,6,6,6]
// Your task is to return the array by not repeating any number more than twice. And the array count. (in place)
// Output : [1,1,3,3,4,5,6,6]

// O(N ^ 2) and O(1) if in place
// O(N) can be achived with the same algo in case we're allowed to allocate extra space
// not sure if it's possible to find an O(N) time complexity with O(1) space cause delete and shift is alread an O(N) operation

function solution(arr, k) {
  let i = 0;
  let j = 0;
  let currentCount = 0;

  // O(N)
  while (i < arr.length) {
    if (arr[i] == arr[j]) {
      if (currentCount >= k) {
        arr.splice(i, 1); // O(N)
        i--;
      }
    } else {
      currentCount = 0;
      j = i;
    }

    currentCount++;
    i++;
  }

  return arr;
}

console.log(solution([1, 1, 1, 3, 3, 3, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6], 2));
