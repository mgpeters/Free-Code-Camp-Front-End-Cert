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

	if(arr[0] > arr[1]){ //arranges the arguments from lowest to highest
		arr = [arr[1], arr[0]];
	}

	for(let round0 = arr[0]; round0 <= arr[1]; round0 += 1){//pushes the range of arguments
		range.push(round0);
	}

	console.log(range);


 // return arr;
}


smallestCommons([5, 1]);