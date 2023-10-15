// ternary operator
// can be called as conditional operators
// Syntax ==>  (Condition) ? (Statement if True) : (Statement if False)

let age = 30;

let decision = age >= 18 ? "Eligible" : "Not Eligible";

console.log(decision);


age = 5; 

let drink = age >= 15 ? "Coffee" : "Milk";

// 5>=15 --> False
// ignore "Coffee"
// accept "Milk" --> drink = Milk

console.log(drink);