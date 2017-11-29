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

	for(round; round < arguments.length; round += 1){
		arguments[round].map(function(currentElement, argIndex){
			if(Array.isArray(currentElement)){
				mergedArr.push(currentElement[0]);
			}
			else{
				mergedArr.push(currentElement);
			}
		})
	}
	console.log("Merged Array: " + mergedArr);
	console.log("Unique Array: " + uniqueArr);
}

uniteUnique([1, 3, 2], [5, 2, 1, [4]], [2, 1]);

