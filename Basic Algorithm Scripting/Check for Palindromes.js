// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, 
// ignoring punctuation, case, and spacing.

function palindrome(str) {
  
  var string = str.replace(/\W/g,"").replace(/\s/g, "").replace(/[_]/, "").toLowerCase();
  
  var reverseString = string.split("").reverse().join('');
  
  if (reverseString === string){
  
  return true;
  }
  else{
    return false;
  }  
}
palindrome("eye");