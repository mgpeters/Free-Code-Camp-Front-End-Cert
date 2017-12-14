/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are 
less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number 
in the sequence is the sum of the two previous numbers. The first six numbers of the 
Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 
10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {
	var drum = null;

	function fibonacci(input){
  		var a = 1, b = 0, temp;

		while (input >= 1){
	    	temp = a;
	    	a = a + b;
	    	b = temp;
	    	console.log(b);

    		if(b & 2 !== 0){
    			drum += b;
    			console.log(b + " has been added to DRUM!");
    		}

    		input -= 1;
 		}

	return b;
	}

	fibonacci(num)
return drum;
}

sumFibs(4);
