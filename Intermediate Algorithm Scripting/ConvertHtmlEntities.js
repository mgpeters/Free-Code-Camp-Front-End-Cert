/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // &colon;&rpar;\
	var	regExpression = [/&|<|>|"|'/],
		regexKey = {};
		
		regexKey[/&/] = '&amp';
		regexKey[/</] = '&lt';
		regexKey[/>/] = '&gt';
		regexKey[/"/] = '&quot';
		regexKey[/'/] = '&apos';
  
  return str.replace(regExpression, regexKey[regExpression]);
}

convertHTML("Dolce & Gabbana");
