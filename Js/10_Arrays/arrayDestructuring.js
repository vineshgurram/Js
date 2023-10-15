// ARRAY DESTRUCTURING 

const FRUITS = [1,2,3,4,5,6,7,8,9];

// we can assign first and second index item in item1 and item2 respectively.

// USING OLD METHOD
// let item1 = FRUITS[0];
// let item2 = FRUITS[1];

// we can use this like below one
// USING ARRAY DESTRUCTURING METHOD
let [item1,item2] = FRUITS;

console.log(item1);
console.log(item2);

// we can use spread operator to combine arrays

let a , b , rest ;

[a,b,...rest] = FRUITS;
console.log(a);
console.log(b);
console.log(rest);