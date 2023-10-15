// 41. Write a JavaScript program to check a set of three numbers; 
// if the three numbers are the same return 30; otherwise return 20; 
// and if two numbers are the same return 40.  

// BREAKDOWNS
// THERE ARE 3 NUMBERS
// IF ALL NUMBERS ARE SAME RETURN 30 ELSE RETURN 20
// IF TWO NUMBERS ARE SAME RETURN 40

checkThreeNumbers=(numOne,numTwo,numThree)=>{
    if(numOne == numTwo && numTwo == numThree && numThree == numOne){
        return 30
    }
    else if(numOne == numTwo || numTwo == numThree || numThree == numOne ){
        return 40
    }
    return 20
}

// console.log(checkThreeNumbers(1,111,11))
console.log(checkThreeNumbers(8, 8, 8))
console.log(checkThreeNumbers(8, 8, 18))
console.log(checkThreeNumbers(8, 7, 18))