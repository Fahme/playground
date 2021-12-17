function pClosest(points, k) {
  let distances = [];
  for (let [x, y] of points) {
    const caluclate = x * x + y * y;
    distances.push(caluclate);
  }

  const sorted = distances.sort((a, b) => b - a);

  while (k > 0) {
    console.log(sorted[k]);
    k--;
  }
}

pClosest(
  [
    [1, 3],
    [-2, 2],
  ],
  1
);
