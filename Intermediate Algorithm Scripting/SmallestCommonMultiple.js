/*

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by 
both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly 
divisible by all numbers between 1 and 3.

*/

function smallestCommons(arr) {
	var range = [];

	if(arr[0] < arr[1]){ //arranges the arguments from highest to lowest
		arr = [arr[1], arr[0]];
	}

	for(let round0 = arr[0]; round0 >= arr[1]; round0 -= 1){//pushes the range of arguments
		range.push(round0);
	}

	for(let round1 = 0; round1 < range.length; round1 += 1){// find the multiples of the two elements of the arr array
		let multiple = 2,
		commonMultiple = multiple * range[round1];

		

		multiple += 1;
	}

	console.log(range);


 // return arr;
}


smallestCommons([3, 10]);