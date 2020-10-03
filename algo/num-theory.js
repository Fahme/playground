function GCD(a, b) {
	if (b === 0) return a;
	return GCD(b, a % b);
}

function fib(n) {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
}
