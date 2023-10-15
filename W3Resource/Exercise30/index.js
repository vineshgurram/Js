// 30. Write a JavaScript program to check whether a string
// "Script" appears at the 5th (index 4) position in a given string.
// If "Script" appears in the string, return the string without 
// "Script" otherwise return the original one.  

// BREAKDOWNS
// 1. CREATE A VARIABLE FOR GIVEN STRING I.E "javaScript"
// 2. CREATE A VARIABLE FOR STRING "Script"
// 3. IF "Script" at the 5th (index 4) APPEARS IN GIVEN STRING THEN RETUN STRING WITHOUT "Script"
// 4. OR ELSE RETURN ORIGINAL STRING
// 5. WE USE "replace(previous_value , replace_value)" 

// let str = "JavaScript";
// console.log(str.substring(4))
// let rep = str.substring(10, 4);
// console.log(rep)



function stringChecker(string){
    if(string.substring(4) === "Script"){
        return string.replace(string.substring(4),"");
        // return string.substring(0,string.length-6);
        // return string.substring(0,4)
    }
    else {
        return string
    }
}

console.log(stringChecker("JavaScript"))
console.log(stringChecker("CoffeeScript"))
