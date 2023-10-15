// 40. Write a JavaScript program to check from two given integers whether 
// one of them is 8 or their sum or difference is 8.  


sumDifferenceChecker = (a,b) =>{
    if(a == 8 || b == 8){
        return true
    }
    else if(a+b == 8 || Math.abs(a-b)==8){
        return true
    }
    return false
}

// console.log(sumDifferenceChecker(4,-8))
console.log(sumDifferenceChecker(7, 8))
console.log(sumDifferenceChecker(16, 8))
console.log(sumDifferenceChecker(24, 32))
console.log(sumDifferenceChecker(17, 18))
