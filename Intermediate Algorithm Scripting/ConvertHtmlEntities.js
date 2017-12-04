/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // &colon;&rpar;\
	var	regExpression = /&|<|>|"|'*/g,
		found = regExpression.exec(str);
		regexKey = {};
		
		regexKey[/&/] = '&amp;';
		regexKey[/</] = '&lt;';
		regexKey[/>/] = '&gt;';
		regexKey[/"/] = '&quot;';
		regexKey[/'/] = '&apos;';

		console.log(found);

  
  return str.replace(regExpression, regexKey['/' + found[0] + '/']);
}

convertHTML("Dolce & Gabbana");
