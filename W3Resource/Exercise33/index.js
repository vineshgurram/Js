// 33. Write a JavaScript program to check whether two numbers are
// in the range 40..60 or 70..100 inclusive.  

function numberWithinRange(firstNumber,secondNumber){
    if((firstNumber >= 40 && firstNumber <= 60) && (secondNumber >= 40 && secondNumber <= 60) ||
    (firstNumber >= 70 && firstNumber <= 100) && (secondNumber >= 70 && secondNumber <= 100) ){
        return true
    }
    else {
        return false
    }
}

console.log(numberWithinRange(44, 56));
console.log(numberWithinRange(70, 95));
console.log(numberWithinRange(50, 89));
