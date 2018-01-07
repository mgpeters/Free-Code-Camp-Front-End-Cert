/*

Finders Keepers

Create a function that looks through an array (first argument) and returns the first
element in the array that passes a truth test (second argument).

*/

function findElement(arr, func) {
  var num = 0;

  for(let n = 0; n < arr.length; n += 1){
  	if(func(arr[n])){
  		num = arr[n];
  		break;
  	}
  }

  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });