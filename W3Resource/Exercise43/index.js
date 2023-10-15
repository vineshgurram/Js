// 43. Write a JavaScript program to check from three given numbers (non negative integers)
// that two or all of them have the same rightmost digit.  

// 3 NUMBERS
// 2 OR ALL RIGHTMOST DIGIT (END)

threeNumberEqualCheck = (a,b,c) =>{
    if(a%10 == b%10 == c%100){
        return true
    }
}

console.log(threeNumberEqualCheck(12,22,32));

// let num = 12;
// console.log(num%10)

