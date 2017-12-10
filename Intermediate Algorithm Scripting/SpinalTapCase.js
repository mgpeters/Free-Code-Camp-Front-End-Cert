/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {


	/*function switchaRoo(input){
	  		switch(input){
	    		case " ":
	    		case "_":
	    			return "-";
	    		//case "A-Z":
	      		//	return " ";
	    }
	 }*/
	//console.log(/[\s_-]+/g.test(str));
	//console.log(str.match(/[A-Z][a-z]+/g).join(" "));
	if (!/[\s_-]+/g.test(str)){ // checks if str has none of the special characters
		str = str.match(/[A-Z][a-z]+/g).join(" ");// Helps seperate strings with no white spaces
	}

	return str.replace(/[\s_]+/g, "-");
}

spinalCase("ThisIsSpinalTap");
