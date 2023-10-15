// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

function sumTwoNumber(a,b) {
    if(a == b){
        return (a + b)*3 
    }
    else{
        return a + b
    }
}

console.log(sumTwoNumber(10,10))