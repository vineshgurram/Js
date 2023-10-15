// HOISTING BASICS

// USING FUNCTION DECLARATION
// console.log(print());

// function print(){
//   return "Hello World";
// }

// USING OTHER FUNCTIONS
// console.log(print()); // This will not work same as function declaration i.e shows error
// const print = function(){
//   return "Hello World";
// }

// console.log(print());
// const print = () => "Hello World";

// USING VAR
// console.log(a); // undefined
var a = "using var";

// USING LET and CONST
// console.log(b); // shows error
let b = "using let";

const c = "using const"; // shows error
console.log(c);
