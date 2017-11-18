/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example 
if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/


function myReplace(str, before, after) {
	var arr = [],
		round = 0,
		caseCheckBefore = before.split(""),
		caseCheckAfter = after.split("");

		arr = str.split(" ");
		console.log(caseCheckAfter);
		//console.log(caseCheckBefore);
		console.log(caseCheckAfter[0].charCodeAt());
		 

		if (caseCheckBefore[0].charCodeAt() >= 65 && caseCheckBefore[0].charCodeAt() <= 90 || caseCheckAfter[0].charCodeAt() >= 65 && caseCheckAfter[0].charCodeAt() <= 90){ // case check
			console.log("capital check works")
			after = caseCheckAfter[0].toUpperCase();
			before = caseCheckBefore[0].toUpperCase();
			console.log(after);
			console.log(before);


		}

		for(round; round < arr.length; round += 1){
			if(arr[round] == before){
				arr.splice(round, 1, after);
				str = arr.join(" ");
			}
		}

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");



