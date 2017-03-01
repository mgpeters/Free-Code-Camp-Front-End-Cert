// The method sort easily sorts values in an array alphabetically or numerically.
// Unlike the previous array methods we have been looking at, sort actually alters the array in place. 
// However, it also returns this sorted array.

// sort can be passed a compare function as a callback. The compare function should return a negative 
// number if a should be before b, a positive number if a should be after b, or 0 if they are equal.

// If no compare (callback) function is passed in, it will convert the values to strings and sort alphabetically.

// The below sorts the contents of the array from largest to smallest.

var array = [1, 12, 21, 2];

array.sort(function (a, b){
  return b - a;
});
