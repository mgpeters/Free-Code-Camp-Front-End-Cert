/*

Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/


function sumPrimes(num) {
	var bucket = [], //bucket list of numbers up to num
		round = 2;

	for(round; round <= num; round += 1){ //finds and buckets all numbers for num starting with 2
		bucket.push(round);
	}

	console.log(bucket);

	return num;
}

sumPrimes(10);
