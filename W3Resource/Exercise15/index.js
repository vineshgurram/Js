// Write a JavaScript program to get the difference between 
// a given number and 13,if the number is broader than 13 
// return double the absolute difference.

function difference(num) {
    if(num > 13){
        return (num - 13) * 2
    }
    else {
        return num - 13
    }
}

console.log(difference(20),"If number is broader");
console.log(difference(12),"If number is smaller");
