/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // &colon;&rpar;\
	var	regExpression = /&|<|>|"|'/g,
		found = regExpression.exec(str),
		convert = "",
		regexKey = {};
		
		regexKey[/&/] = '&amp;';
		regexKey[/</] = '&lt;';
		regexKey[/>/] = '&gt;';
		regexKey[/"/] = '&quot;';
		regexKey[/'/] = '&apos;';

		//console.log(typeof regExpression.exec(str) === object);

		function filterREGEX(input){
			if(regExpression.exec(input) === null){
				convert = input;
				return;
			}
			else if(regExpression.test(input)){
				return;
			}

		}
//.replace(regExpression, regexKey['/' + found[0] + '/']);
	filterREGEX(str);

	return convert;
}


convertHTML("ab&hhc");

