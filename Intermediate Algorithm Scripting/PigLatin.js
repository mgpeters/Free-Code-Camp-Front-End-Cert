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
            strArray = str.split(""),
            consonantGroupRound = 0,                       
            consonantRound = 0,
            vowelRound = 0;
 
		for (consonantGroupRound; consonantGroupRound < consonantGroups.length; consonantGroupRound +=1){
		    if (str.indexOf(consonantGroups[consonantGroupRound]) === 0){
		        strArray.push(consonantGroups[consonantGroupRound] + "ay");
		        arr = strArray.join("");
		        return arr.substr(2);
			}
		}
		for (consonantRound; consonantRound < consonant.length; consonantRound +=1){
            if (str.indexOf(consonant[consonantRound]) === 0){
                strArray.push(consonant[consonantRound] + "ay");
                arr = strArray.join("");
                return arr.substr(1);
            }
        }
		for (vowelRound; vowelRound < vowel.length; vowelRound +=1){
            if (str.indexOf(vowel[vowelRound]) == 0){
                strArray.push("way");
                return strArray.join("");
            }
        }
 
	return "No hits - Error";
}
 
translatePigLatin("eight");