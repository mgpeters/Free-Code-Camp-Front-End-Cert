//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.


 
function convertToRoman(num) {
	var roman = "";

	function recursiveConvert (input){
    	let workNum = input;

        if(workNum >= 1000){
            roman += "M";
            workNum = workNum - 1000;
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
        else if(workNum >= 90){
            roman += "XC";
            workNum = workNum - 90;
            recursiveConvert(workNum);
        }
        else if(workNum >= 50) {
        	roman += "L";
        	workNum = workNum - 50;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 40) {
        	roman += "XL";
        	workNum = workNum - 40;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 10) {
        	roman += "X";
        	workNum = workNum - 10;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 9) {
        	roman += "IX";
        	workNum = workNum - 9;
        	recursiveConvert(workNum);
        } 
        else if(workNum >= 5) {
        	roman += "V";
        	workNum = workNum - 5;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 4) {
        	roman += "IV";
        	workNum = workNum - 4;
        	recursiveConvert(workNum);
        }
        else if(workNum >= 1) {
        	roman += "I";
        	workNum = workNum - 1;
        	recursiveConvert(workNum);
        }
	}

recursiveConvert(num);

return roman;
}
 
convertToRoman(4800);