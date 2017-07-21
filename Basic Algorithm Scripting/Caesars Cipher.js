/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters
are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and 
returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) { // LBH QVQ VG!
  var i = 0, j = 0, code = [], codeString = '';
 
  for (i; i < str.length; i++){
    code[i] = str.charCodeAt(i);
        if (code[i] !== 32 && code[i] !== 46 && code[i] !== 63 && code[i] !== 33){
            code[i] = code[i] - 13;
                if (code[i] < 65){
                    code[i] = code[i] + 26;
        }
    }
  }
        for (j; j < code.length; j++){
            codeString += String.fromCharCode(code[j]);
	    }
 
return codeString;
}
rot13("SERR PBQR PNZC");