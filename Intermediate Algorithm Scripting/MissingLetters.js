/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
	var round = 0;

	for(round; round < str.length; round += 1){
		if(str[round + 1] === undefined){
			return undefined;
		}
		else if(str.charCodeAt(round + 1) - str.charCodeAt(round) !== 1){
			return String.fromCharCode(str.charCodeAt(round) + 1);
		}
	}
  return undefined;
}

fearNotLetter("abce");
