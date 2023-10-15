// 37. Write a JavaScript program to produce a new string that has 
// the first 3 characters in lower case from a given string.
// If the string length is less than 3 convert all the characters 
// to upper case.  

// BREAKDOWNS
// 1. CREATE A STRING THAT HAS FIRST 3 CHARACTERS AS LOWERCASE FROM 
//    GIVEN STRING.
// 2. IF A STRING LENGTH IS LESS THAN 3 THEN CONVERT ALL CHARACTERS 
//    UPPERCASE.

returnNewString = (string) => {
    if(string.length < 3){
        return string.toUpperCase();
    }
    else{
        return string.substring(0,3).toLocaleLowerCase() + string.substring(3,string.length);
    }
}

// let str = "Python"
// console.log(str.substring(0,3).toLocaleLowerCase()+ str.substring(3,str.length))

console.log(returnNewString("JAVASCRIPT"))