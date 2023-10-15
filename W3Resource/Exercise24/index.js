// 24. Write a JavaScript program to create another string 
// from a given string with the first character of the given 
// string added to the front and back.  

/* 

    BREAKDOWNS ==>
    1. CREATE A NEW STRING FROM A GIVEN STRING.
    2. PUT A FIRST CHARACTER AT START AND END OF STRING. 
    3. RETURN A NEW STRING

*/

// let str = "vinesh";
// let firstChar = str[0];
// console.log(firstChar);

// console.log(str[0]+str.substring(0,str.length)+str[0]);

function addFirstLastCharacterString(givenString){
    return givenString[0]+givenString+givenString[0]; // using old method
    // return givenString.substring(0,1) + givenString.substring(0,givenString.length) + givenString.substring(0,1)
}

console.log(addFirstLastCharacterString("Hello"));
