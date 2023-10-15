// Write a JavaScript program to create another string by adding 
// "Py" in front of a given string. If the given string begins with 
// "Py" return the original string.



// let givenString = "Py";
// let userString = "Python"
// if(userString[0]+userString[1]==givenString){
//     console.log(userString);
// }
// else{
//     let newString = givenString + userString ;
//     console.log(newString)
// }

function createAnotherString(userString,givenString="Py"){
    if(userString.substring(0,2)===givenString){
        return userString
    }
    else {
        return givenString + userString;
    }
}


console.log(createAnotherString("Python"));
