/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // &colon;&rpar;\
	var	regExpression = /&|<|>|"|'/g,
		convert = "",
		regexKey = {};
		
		regexKey[/&/] = '&amp;';
		regexKey[/</] = '&lt;';
		regexKey[/>/] = '&gt;';
		regexKey[/"/] = '&quot;';
		regexKey[/'/] = '&apos;';

		//console.log(typeof regExpression.exec(str) === object);

		function filterREGEX(input){
			let found = regExpression.exec(input);

			if(found === null){
				console.log("nothing to change: " + found);
				convert = input;
				return;
			}
			else if(regExpression.test(input)){
				convert = input.replace(regExpression, regexKey['/' + found[0] + '/'])
				console.log("Change Detected: " + regExpression);
				filterREGEX(convert);
			}
			else{
				console.log("Broke Recursion");
				return input;
			}

		}
//.replace(regExpression, regexKey['/' + found[0] + '/']);
	filterREGEX(str);

	return convert;
}


convertHTML("abhhc");

