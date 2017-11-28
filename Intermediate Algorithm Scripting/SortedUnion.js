/* 
Sorted Union

Write a function that takes two or more arrays and returns a new array 
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the 
final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/



function uniteUnique(arr) {
	var uniqueArr = [],
		round1 = 0,
		round2 = 0;

	for(round1; round1 < arguments.length; round1 +=1){
		let argument = arguments[round1];

		for(round2; round2 < arguments[round1.length; round2 += 1]){
			
		}
		argument.reduce(function(first, next){

		})

		console.log(argument);

	}
	return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

