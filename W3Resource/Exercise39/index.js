// 39. Write a JavaScript program to compute the sum of the two given integers.
// If the sum is in the range 50..80 return 65 otherwise return 80.  

sumOfNumbers = (firstNumber, secondNumber) =>{
    sum = firstNumber + secondNumber;
    if(sum >= 50 && sum <= 80){
        return 65;
    }
    return 80;
}

console.log(sumOfNumbers(40,10));
