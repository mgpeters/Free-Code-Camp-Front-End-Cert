// The array method "reduce" is used to iterate through an array and condense it into one value.
// To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) 
// and the current value (currentVal).
// The accumulator is like a total that reduce keeps track of after each operation. The current value is
// just the next element in the array you're iterating through.
// reduce has an optional second argument which can be used to set the initial value of the accumulator. 
// If no initial value is specified it will be the first array element and currentVal will start with the second array element.

var array = [4,5,6,7,8];

var singleVal = 0;

singleVal = array.reduce(function(singleVal, array) {
return singleVal + array;
}, 0);