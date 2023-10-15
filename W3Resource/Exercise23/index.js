// Write a JavaScript program to create a new string 
// from a given string by changing the position of the first 
// and last characters. The string length must be broader than or 
// equal to 1.

/* BREAKDOWNS 

1. CREATE A NEW STRING BY USING GIVEN STRING.
2. BY USING GIVEN STRING CHANGE POSITION OF FIRST AND LAST CHARACTERS.
3. GIVEN STRING LENGH CAN BE ONE OR MORE THAN ONE.

*/

function changeStringPosition(givenString){
    if(givenString.length <= 1){
        return givenString
    }
    else{
        let halfString = givenString.substring(1,givenString.length-1);
        // return givenString[givenString.length-1] + halfString + givenString[0]
        return givenString.charAt(givenString.length - 1) + halfString + givenString.charAt(0)
    }
}
console.log(changeStringPosition("vinesh"));
console.log(changeStringPosition("b"));

// let str = "vinesh";
// let newStr = str.substring(1,str.length-1);
// console.log(newStr);
// console.log(str[str.length-1]+newStr+str[0]);
// console.log(str.charAt(str.length - 1) + newStr + str.charAt(0));


