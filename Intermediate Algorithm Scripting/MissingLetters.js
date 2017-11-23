/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
	var numberArray = [],
		round = 0,
		round2 = 0;

		console.log(str.charCodeAt(3));

	/*for(round1; round1 < str.length; round1+= 1){
		numberArray.push(str.charCodeAt(round1));
	}
	for(round2; round2 < numberArray.length; round2 += 1){
		if(str.charCodeAt(round2) !== numberArray[round2]){
			return String.fromCharCode(numberArray[round2] + 1);
		}
	}
	console.log(numberArray);
	*/

	for(round; round < str.length; round += 1){
		if(isNaN(str.charCodeAt(round))){
			console.log("NaN/Undefined Works");
			return undefined;
		}
		else if(str.charCodeAt(round + 1) - str.charCodeAt(round) !== 1){
			console.log("elseif works on round: " + round);
			return String.fromCharCode(str.charCodeAt(round) + 1);
		}
	}
  return undefined;
}

fearNotLetter("abce");
