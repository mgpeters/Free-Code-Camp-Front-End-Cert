//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.


 
function convertToRoman(num) {
	var roman = "",
        count = 0,
        amt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        key = {
            1000:"M",
            900: "CM",
            500: "D",
            400: "CD",
            100: "C",
            90:  "XC",
            50:  "L",
            40:  "XL",
            10:  "X",
            9:   "IX",
            5:   "V", 
            4:   "IV",
            1:   "I"
        };

	function recursiveConvert (input){
    	let workNum = input;

        if(workNum >= amt[count]){
            roman += key[amt[count]];
            workNum = workNum - amt[count];
            recursiveConvert(workNum);
        }
        else if(workNum === 0){
            return;
        }
        else {
            count += 1;
            recursiveConvert(workNum);
        }
	}

recursiveConvert(num);

return roman;
}
 
convertToRoman(4800);