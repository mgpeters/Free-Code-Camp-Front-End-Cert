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
	var drum = 1;


	function fibonacci(input){
  		var a = 1, b = 0, temp;

		while (input >= 2 && a < num){
	    	temp = a;
	    	a = a + b;
	    	b = temp;
	    	console.log("A is: " + a + "\nWhile B is: " + b);

    		if(a % 2 !== 0){
    			drum += a;
    			console.log(a + " has been added to DRUM!\nDrum is now: " + drum);

    		}

    		input -= 1;
 		}

	return b;
	}

	fibonacci(num)

return drum;
}

sumFibs(1000);
