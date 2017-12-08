/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {


	function switchaRoo(input){
	  		switch(input){
	    		case " ":
	    		case "_":
	    			return "-";
	    		//case "A-Z":
	      		//	return " ";
	    }
	 }

	str = str.split(/(?=[A-Z])/).join("-");

	return str.toLowerCase().replace(/[\s_]/g, switchaRoo);
}

spinalCase("ThisIsSpinalTap");