/*fib(n)
Write a method to return the Nth 
number of Fibonacci sequence.*/

function fib(n) {
	var f = [];
	for (var i = 0; i < n; i++) {
		f.push((i < 2) ? i : f[i-1] + f[i-2]);
	}
	return f;
}

console.log(fib(10));

//Recursive statement, example from class
var fib = function(n) {
	if (n <= 1) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
console.log(fib(3));