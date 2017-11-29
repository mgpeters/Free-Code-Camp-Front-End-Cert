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
	var mergedArr = [],
		uniqueArr = [],
		round = 0;

	for(round; round < arguments.length; round += 1){ //Creates a single array with all numbers. Nested or not.
		arguments[round].map(function(currentElement, argIndex){
				mergedArr.push(currentElement);
		});
	}
	mergedArr.map(function(currentElement, argIndex){
		if(uniqueArr.length === 0){
			uniqueArr.push(currentElement);
		}
		else if(uniqueArr.indexOf(currentElement) === -1){
			uniqueArr.push(currentElement);
		}
	});

	return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, [1, 4]], [2, 1]);

