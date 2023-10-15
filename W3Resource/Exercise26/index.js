// 26. Write a JavaScript program to create a string from a given string.
// This is done by taking the last 3 characters and adding them at both 
// the front and back. The string length must be 3 or more.  

// BREAKDOWNS
// 1. CREATE A NEW STRING FROM EXISTING/GIVEN STRING 
// 2. GET LAST 3 CHARACTERS AND STORE THEM IN NEW VARIABLE
// 3. ADD THE LAST 3 CHARACTERS STRING IN FRONT AND BACK OF THE EXISTING STRING


// let givenString = "abcd";
// console.log(givenString);
// let threeCharacterString = givenString.substring(givenString.length - 3);
// console.log(threeCharacterString);
// let newString = threeCharacterString + givenString + threeCharacterString;
// console.log(newString);


function addThreeStrings(string) {
    if (string.length < 3) {
        return "Character of a given string is less than 3. So not Possible."
    }
    else {
        return string.substring(string.length - 3) + string + string.substring(string.length - 3)  ;
    }
}

console.log(addThreeStrings("vinesh"));
console.log(addThreeStrings("abd"));
console.log(addThreeStrings("d"));