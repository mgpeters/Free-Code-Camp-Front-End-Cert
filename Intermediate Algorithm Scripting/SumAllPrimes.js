/*

Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/


function sumPrimes(num) {
	var bucket = [], //bucket list of numbers up to num
		sieveBucket = [],
		bucketRound = 2,
		round1 = 0;

	for(bucketRound; bucketRound <= num; bucketRound += 1){ //finds and buckets all numbers for num starting with 2
		bucket.push(bucketRound);
	}

	console.log("Your bucket contains: " + bucket);

	sieveBucket = bucket;

	for(round1; round1 < bucket.length; round1 += 1){ //Sieve of Eratosthenes
		for(let round2 = 0; round2 < bucket.length; round2 += 1){
			console.log("round1 is now: " + round1 + " which contains: " + bucket[round1] + " while round2 is now: " + round2 + " which contains: " + bucket[round2]);
			let multiple = bucket[round1] * bucket[round2];
			console.log("var multiple is: " + multiple);

			console.log("Here's the index of bucket.indexOf(multiple): " + bucket.indexOf(multiple));

			if(bucket.indexOf(multiple) >= 1){
				let index = bucket.indexOf(multiple);
				seiveBucket.splice(index, 1);
				console.log("bucket now contains: " + bucket);
			}
		//The sieve checks multiples of numbers in our array, use the loop to create an index, then use .indexOf() to see
		// if this number appears i our array, if it does, .splice() it out

		}
	}
	console.log("Final var bucket contains: " + bucket);
	return "Loop as run it's course";
}

sumPrimes(8);
