// The filter method is used to iterate through an array and filter out elements where a given condition is not true.
// filter is passed a callback function which takes the current value (we've called that val) as an argument.

// Any array element for which the callback returns true will be kept and elements that return false will be filtered out.

// The following code is an example of using filter to remove array elements that are less than 6.


var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(value){
      return value < 6;
});