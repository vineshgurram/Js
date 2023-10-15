//20. Write a JavaScript program to check two given integers
// whether one is positive and another one is negative.  

let integerOne = 2;
let integerTwo = -2;



function postiveOrNegativeInteger(a,b){
    if((a > 0 && b < 0)||(a < 0 && b > 0)){
        return true
    }
    else{
        return false
    }
}

// postiveOrNegativeInteger(integerOne,integerTwo)
console.log(postiveOrNegativeInteger(2, 2))
console.log(postiveOrNegativeInteger(-2, 2))
console.log(postiveOrNegativeInteger(2, -2))
console.log(postiveOrNegativeInteger(-2, -2))