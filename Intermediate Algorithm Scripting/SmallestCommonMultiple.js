/*

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by 
both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly 
divisible by all numbers between 1 and 3.

*/

function smallestCommons(arr) {
	var range = [],
		commonMultiple = 0,
		loop = 1,
		multipleLoop;

	if(arr[0] < arr[1]){ //arranges the arguments from highest to lowest
		arr = [arr[1], arr[0]];
	}

	for(let round0 = arr[0]; round0 >= arr[1]; round0 -= 1){//pushes the range of arguments
		range.push(round0);
	}

	do{
		commonMultiple = range[0] * loop * range[1];

		for(multipleLoop = 2; multipleLoop < range.length; multipleLoop += 1){
			if(commonMultiple % range[multipleLoop] !== 0){
				break;
			}
		}

	loop += 1;
	}
	while(multipleLoop !== range.length);

console.log(commonMultiple);

return commonMultiple;
}


smallestCommons([1, 5]);