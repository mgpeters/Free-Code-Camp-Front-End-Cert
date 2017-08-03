/*We'll pass you an array of two numbers. Return the sum
of those two numbers and all numbers between them.

The lowest number will not always come first. */


function sumAll(arr) {
  var x = Math.min(arr[0], arr[1]), y = Math.max(arr[0], arr[1]), z = 0;
  for (x; x <= y; x+= 1){
    z += x;
  }
  
  return z;
}

sumAll([1, 4]);