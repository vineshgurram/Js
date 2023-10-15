// 32. Write a JavaScript program to find the closest value to 100 from 
// two numerical values.  

function closestNumbericValue(noOne, noTwo) {
    val1 = 100 - noOne;
    val2 = 100 - noTwo;
    if(val1 > val2){
        return noTwo + " is nearest."
    } 
    else if(val2 > val1){
        return noOne + " is nearest."
    }
    else{
        return noOne + " and " + noTwo + " are equal."
    }
}

console.log(closestNumbericValue(4, 4));
console.log(closestNumbericValue(41, 4));
console.log(closestNumbericValue(-90, -89));
console.log(closestNumbericValue(90, 90));

