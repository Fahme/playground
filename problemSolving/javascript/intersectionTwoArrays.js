function intersection(arr1, arr2) {
  const _intersection = [];
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  for (const current of set1) {
    if (set2.has(current)) {
      _intersection.push(current);
    }
  }

  return _intersection;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));