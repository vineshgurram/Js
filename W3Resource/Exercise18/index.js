// Write a JavaScript program to check a pair of numbers 
//and return true if one of the numbers is 50 or if their sum is 50. 

let numberOne = 28;
let numberTwo = 22;

let sum = numberOne + numberTwo;

function check(a,b) {
    if (numberOne == 50 || numberTwo == 50 || sum == 50){
        return true // return only makes sense inside a function 
    }   
}

console.log(check(numberOne,numberTwo));