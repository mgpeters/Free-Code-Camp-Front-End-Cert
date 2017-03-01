// This task has us using the map function to add 3 to every value in the variable oldArray, 
// and save the results into variable newArray. oldArray should not change.


var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val){  // The map method iterates through every element of
  return val + 3;                           // the array, creating a new array with values that 
                                            // have been modified by the callback function.
});

console.log(newArray);