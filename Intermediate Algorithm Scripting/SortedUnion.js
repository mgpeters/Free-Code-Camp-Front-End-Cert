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
	var uniqueArr = arr.reduce(function(first, second){
		return first.concat(second);
	}, []);
		round1 = 0,
		round2 = 0,
		round3 = 1;

		/*function flatten(arr) {
  			return arr.reduce(function (flat, toFlatten) {
    			return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  			});
		}

	for(round1; round1 < arguments.length; round1 +=1){
		let argument = arguments[round1];

		uniqueArr += flatten([argument]);
	}*/
	console.log(uniqueArr);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

