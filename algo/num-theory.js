function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function fibEffcient(n) {
  const fib = [...Array(n).keys()];

  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib[n]
}

console.log(fibEffcient(100))
