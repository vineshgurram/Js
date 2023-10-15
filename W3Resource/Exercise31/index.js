// 31. Write a JavaScript program to find the largest of three given integers.  

// COMPARE ALL THREE NUMBERS WITH EACH OTHER 

function largestThreeNumber(firstNumber, secondNumber, thirdNumber) {

    // if(firstNumber > secondNumber && firstNumber > thirdNumber){
    //     return firstNumber + " is greater."
    // }
    // else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    //     return secondNumber + " is greater"
    // }
    // else{
    //     return thirdNumber + " is greater"
    // }

    largestNumber = 0;
    if (firstNumber > secondNumber) {
        largestNumber = firstNumber
    }
    else {
        largestThreeNumber = secondNumber
    }

    if (thirdNumber > largestThreeNumber) {
        largestThreeNumber = thirdNumber
    }

    return largestNumber + " greater"
}

console.log(largestThreeNumber(1, 0, 1));
console.log(largestThreeNumber(0, -10, -20));
console.log(largestThreeNumber(1000, 510, 440));

