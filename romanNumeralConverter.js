
function convertToRoman(num) {
	var count = num;
  	var numerals = "";

	while (count > 0) {
		if (count >= 900) {
      	// handles CM cases (900)
      		if (count >= 900 && count < 1000) {
        		numerals += "CM";
        		count -= 900;
      		} else {
        		numerals += "M";
				count -= 1000;
      		}
		} else if (count >= 400) {
        // handles CD cases
        	if (count >= 400 && count < 500) {
          		numerals += "CD";
          		count -= 400;          
        	} else {
         		numerals += "D";
		 		count -= 500;
        	}
		} else if (count >= 90) {
        // handles XC cases
      		if (count >= 90 && count < 100) {
        		numerals += "XC";
        		count -= 90;
      		} else {
        		numerals += "C";
				count -= 100;
      		}
		} else if (count >= 40) {
		// handles XL cases (40)
			if (count >= 40 && count < 50) {
				numerals += "XL";
				count -= 40;
			} else {
				numerals += "L";
				count -= 50;
			}
		} else if (count >= 9) {
		// handles IX cases (9)
			if (count == 9) {
				numerals += "IX";
				count -= 9;
			} else {
				numerals += "X";
				count -= 10;	
			}
		} else if (count >= 4) {
		// handles IV cases (4)
			if (count == 4) {
				numerals += "IV";
				count -= 4;
			} else {
				numerals += "V";
				count -= 5;
			}
		} else if (count >= 1) {
			numerals += "I";
			count -= 1;
		}
		
 	}
  return numerals;
}

var input = 1066;
console.log(convertToRoman(input)); //XCIX
