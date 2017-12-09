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
	 console.log(str.match(/[A-Z][a-z]+/g).join(" ")); // Helps seperate strings with no white spaces
	 /*if (!/\s/.test(str)){
	 	return str.split(/(?=[A-Z])/).join("-");
	 }
	 console.log(Boolean(/\s/.test(str)));
	//str = str.split(/(?=[A-Z])/).join("-");
	*/

	return str.replace(/[\s_]/g, "-");
}

spinalCase("This Is Spinal Tap");
