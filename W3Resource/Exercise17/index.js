// 17. Write a JavaScript program to compute the absolute difference between
// a specified number and 19. Returns triple the absolute difference if the 
// specified number is greater than 19.  

// 1. D/B user number & 19
// 2. return triple if usernumber is greater than 19


let givenNumber = 19;
let userNumber = 12;
function absoluteDifferenceNo(a,b) {
    if(a >= b){
        return (a-b)*3
        // 19-12 = 7*3 = 24
    }
    else{
        return b-a
        // 12-19 = -7
    }
}

console.log(absoluteDifferenceNo(userNumber,givenNumber));