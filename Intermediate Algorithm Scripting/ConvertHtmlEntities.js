/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  
	function switchHTML(input){
  		switch(input){
    		case "&":
      			return "&amp;";
    		case "<":
      			return "&lt;"; 
    		case ">":
      			return "&gt;";
    		case '"':
      			return '&quot;';
    		case "'":
      			return "&apos;";  
    }
 }

	return str.replace(/&|<|>|"|'/g, switchHTML);
}

convertHTML("Dolce & Gabbana");