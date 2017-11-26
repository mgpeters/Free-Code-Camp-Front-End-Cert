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
	var	union = [],
		roundOuter = 0;

		for(roundOuter; roundOuter < arguments.length; roundOuter += 1){
			for(let roundInner = 0; roundInner < union.length; roundInner += 1){
				union.push()
			}
		}
 
  return union;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
