// This challange asked me to reverse a string.
// In order to do this, you need to .split .reverse .join in that order
// as .split by "" splits the string into an array, with each space containing one letter.
// .reverse then reverses that array, then .join brings them back together, turning it back into a
// string.


function reverseString(str) {
  
  return str.split("").reverse().join('');
}

reverseString("hello");