/*

Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/


function sumPrimes(num) {
	var key = [];
		round = 0,
		bucket = 0;

	for(round; round <= num; round += 1){
		

		/*if(num > 1 && num / num === 1){
			bucket += round;
		}*/
		console.log("Num = " + round + "\nBucket = " + bucket);
	}
	
	return bucket;
}

sumPrimes(10);
