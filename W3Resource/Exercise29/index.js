// 29. Write a JavaScript program to check whether three given 
// integer values are in the range 50..99 (inclusive). 
// Return true if one or more of them are in the specified range.  

function checkWithinRange(firstNumber, secondNumber, thirdNumber){
    if((firstNumber >= 50 && firstNumber <= 99) || (secondNumber >= 50 && secondNumber <= 99) || (thirdNumber >= 50 && thirdNumber <= 99))
    {
        return true
    }
    else{
        return false
    }
}

console.log(checkWithinRange(50, 90, 99));
console.log(checkWithinRange(5, 9, 199));
console.log(checkWithinRange(65, 89, 199));
console.log(checkWithinRange(65, 9, 199));