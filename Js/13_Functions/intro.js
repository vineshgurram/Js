// FUNCTIONS IN JAVASCRIPT
// A function is a block of organized, reusable code that performs
// a specific task or set of tasks.

function sum(numOne,numTwo){
    return numOne + numTwo;
}

// console.log(sum(2,3));
// console.log(sum(5,3));
// console.log(sum(5,7));
// console.log(sum(8,7));

// FUNCTION DECLARATION

// function isEven(num){
//     return num % 2 === 0
// }

// FUNCTION EXPRESSION

// const isEven = function(a){
//   return a%2 == 0
// }

// ARROW FUNCTIONS

// const isEven = (a) =>{
//   return a%2 == 0
// }

// ARROW FUNCTION IN SHORT
// FOR ONLY ONE PARAMETER 
const isEven = a => a % 2

console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(2));
console.log(isEven(1));

// function firstCharacter(string){
//     return string[0]
// }

// console.log(firstCharacter("india"))
// console.log(firstCharacter("vinesh"))
// console.log(firstCharacter("anjanailu"))
// console.log(firstCharacter("gurram"))
