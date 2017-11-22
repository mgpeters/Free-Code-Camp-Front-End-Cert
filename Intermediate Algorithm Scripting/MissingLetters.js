/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
	var numberArray = [],
		round1 = 0,
		round2 = 0;

		console.log(str.charCodeAt(round1));

	for(round1; round1 < str.length; round1+= 1){
		numberArray.push(str.charCodeAt(round1));
	}
	for(round2; round2 < numberArray.length; round2 += 1){
		if(numberArray[round2] + 1 !== numberArray[round2 + 1]){
			return String.fromCharCode(numberArray[round2] + 1);
		}
	}
	console.log(numberArray);

  return undefined;
}

fearNotLetter("abce");
