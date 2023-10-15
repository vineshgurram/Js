console.log("Comparision operators");


// == v/s ===

// checks value v/s checks value plus datatype

let num1 = 10;
let num2 = "10";
let num3 = 12;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2); // checks value
console.log(num1 >= num2); // checks value

console.log(num1 == num2);  // checks value
console.log(num1 === num2); // checks value plus datatype
console.log(num1 === num3); // checks value plus datatype


// != v/s !== 

// check value v/s checks value plus datatype

console.clear(); // comment out this to clear previous log 

let a = 10;
let b = "10";
let c = 10;


// console.log(a==b); // true value 
console.log(a!=b); // false value 
// console.log(a===b); // false
console.log(a!==b); // true
console.log(a!=b);



