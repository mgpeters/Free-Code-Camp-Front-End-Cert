/*Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    var consonantGroups = [ 'bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr', 'scg', 'scr', 'shr', 'sph', 'spl', 'spr', 'squ', 'str', 'thr'],
       	consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x','z'],
        vowel = ['a', 'e', 'i', 'o', 'u'],
        strArray = [],
        consonantGroupRound = 0,                       
        consonantRound = 0,
        vowelRound = 0;
 
 
        for (consonantGroupRound; consonantGroupRound < consonantGroups.length; consonantGroupRound +=1){
            if (str.indexOf(consonantGroups[consonantGroupRound]) == 0){
 
            }
        }
		for (consonantRound; consonantRound < consonant.length; consonantRound +=1){
            if (str.indexOf(consonant[consonantRound]) == 0){
			}
        }
		for (vowelRound; vowelRound < vowel.length; vowelRound +=1){
            if (str.indexOf(vowel[vowelRound]) == 0){
                strArray = str.split("");
                strArray = strArray.push("ay");
                return strArray.join("");
            }
        }
 
  return "Error";
}
 
translatePigLatin("consonant");