// Write a JavaScript program that checks whether the last digit
// of three positive integers is the same.


lastNumberChecker = (firstNumber,secondNumber,thirdNumber) => {
    if(firstNumber > 0 && secondNumber > 0 && thirdNumber > 0){
        return firstNumber % 10 == secondNumber % 10 && secondNumber % 10 == thirdNumber % 10 && thirdNumber % 10 == firstNumber % 10
    }
    else{
        return false
    }
}

console.log(lastNumberChecker(121,301,421));
console.log(lastNumberChecker(20, 30, 400));
console.log(lastNumberChecker(-20, 30, 400));
console.log(lastNumberChecker(20, -30, 400));
console.log(lastNumberChecker(20, 30, -400));
