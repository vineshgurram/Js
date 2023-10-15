// HOW TO CLONE ARRAYS

// CLONE USING OLD METHOD

// let arr3 = ["a","b","c","d","e"];
// let arr4 = arr3;

// arr3.push("Ff");

// console.log(arr3);
// console.log(arr4);

// // CLONE USING METHODS

// let arr1 = [1,2,3,4,5,6,7];

// let newArray = ["eight","nine","ten"];
// using slice() method 
// let arr2 = arr1.slice(0); 
// console.log(arr2)
// let arr2 = arr1.slice(0).concat("ek","dho","teen"); // we can combine two arrays using slice() and concat() method.

// using concat() method 
// let arr2 = [].concat(arr1);
// console.log(arr2);
// let arr2 = [].concat(arr1,newArray); // we can combine two arrays using concat() method.
// console.log(arr2)

// using spread operators
// let arr2 = [...arr1]; 
// console.log(arr2)
// let arr2 = [...arr1,...newArray];  // we can combine two arrays using spread operator.
// arr1.push(8);
// arr1.push(9);
// console.log(arr2)
// console.log(arr1);
// console.log(arr2);

// USING CONST FOR ARRAY

const CONST_ARRAY = ["mom","dad","sister","brother"];
// CONST_ARRAY = ["niece","nephew"]; // this is error 

// because assignment for constant variable is not available
// but if you change element inside it without reassigning then it's legal

console.log(CONST_ARRAY);

CONST_ARRAY.push("sibling");
CONST_ARRAY.unshift("grandma");

console.log(CONST_ARRAY);