// Write a JavaScript exercise to get the filename extension.

let fileName = "index.css";

// using split() a string into array --> Array
// using pop() we can remove last index --> Removes Array last index elemnent

let extensionArray = fileName.split(".")

let extension = extensionArray.pop();

console.log(extension);

// let a=document.querySelector("input").value;

// console.log(a);