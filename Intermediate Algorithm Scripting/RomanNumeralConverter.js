//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.


 
function convertToRoman(num) {
	var roman = "";

	function recursiveConvert (input){
    	let workNum = num;

        if(workNum > 1000){

            arr.push("M");
            workNum = workNum - 1000;
            convertToRoman(workNum);
        }
	} 
return roman;
}
 
convertToRoman(5000);