/*printPrime(number)
Take a number, and print all 
primes up to and including that number.*/

function isPrime(number) {
	if (number < 2) {
		return false;
	}
	if (number != Math.round(number)) {
		return false;
	}

	var isPrime = true;
	/* This will check every whole number from 2 to square
	root of number. If any of these divides number
	exactly, number cannot be prime.
	*/
	for (var i = 2; i <= Math.sqrt(number); i++) {
		if (number % i == 0) {
			isPrime = false;
		}
	}
	//This will return whether number is prime or not.
	return isPrime;
}

function printNumber(number) {
	var list = [];
	for (var i = 2; i != number; i++){
		if (isPrime(i)){
			list.push(i);
		}
	}
	return list;
}

console.log(printNumber(10))


