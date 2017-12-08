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
	 if (!/\s/.test(str)){
	 	return str.split(/(?=[A-Z])/).join("-");
	 }
	 console.log(Boolean(/\s/.test(str)));
	//str = str.split(/(?=[A-Z])/).join("-");


	return str.toLowerCase().replace(/[\s_]/g, switchaRoo);
}

spinalCase("This Is Spinal Tap");