/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
	var regex = /[_|]/

  return str.toLowerCase().replace("", "-");
}

spinalCase('This Is Spinal Tap');