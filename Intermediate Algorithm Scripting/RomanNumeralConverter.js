//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.


 
function convertToRoman(num) {
	var roman = "";

	function recursiveConvert (input){
    	let workNum = input;

        if(workNum >= 1000){
            roman += "M";
            workNum = workNum - 1000;
            console.log(input);
            recursiveConvert(workNum);
        }
        else if(workNum >= 900) {
        	roman += "CM";
        	workNum = workNum - 900;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 500) {
        	roman += "D";
        	workNum = workNum - 500;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 400) {
        	roman += "CD";
        	workNum = workNum - 400;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 100) {
        	roman += "C";
        	workNum = workNum - 100;
        	recursiveConvert(workNum);
        }
	}

recursiveConvert(num);

return roman;
}
 
convertToRoman(4800);