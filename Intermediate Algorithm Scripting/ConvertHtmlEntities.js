/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // &colon;&rpar;\
	var	regExpression = [/&|<|>|"|'/],
		regExpressionKey = {
			&: '&amp',
			<: 'lt',
			>: '&gt',
			": '&quot',
			': '&apos'
		};
  
  return str.replace();
}

convertHTML("Dolce & Gabbana");
