// 28. Write a JavaScript program to check whether two given integer
// values are in the range 50..99 (inclusive). Return true if either 
// of them falls within the range.  

// BREAKDOWN 
// 1. WE HAVE TWO GIVEN NUMBERS
// 2. CHECK TWO NUMBERS BETWEEN 50 ------ 99
// 3. RETURN TRUE IF ONE OF THEM FALLS BETWEEN THEM 

let firstNumber = 23;
let secondNumber = 55;

// Old Method 
// for(let i = 50; i <= 99 ; i++){
//     if(firstNumber == i || secondNumber == i){
//         console.log(i + " falls between 50 to 99");
//         break;
//     }
// }


function numberWithinRange(firstNumber, secondNumber){
    if((firstNumber >= 50 && secondNumber <= 99 ) || (secondNumber >= 50 && secondNumber <= 99 )){
        return true
    }
    else {
        return false
    }
}

console.log(numberWithinRange(62,13));
console.log(numberWithinRange(12, 101));
console.log(numberWithinRange(52, 80));
console.log(numberWithinRange(15, 99));


