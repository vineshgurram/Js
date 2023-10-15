// 48. Write a JavaScript program to reverse a given string.  


// IN THIS PROBLEM WE WE USE THREE METHODS

// split() - split a string into Array
// reverse() - reverse a array 
// join() - join

reverseString = (str) => {
    return str.split("").reverse().join("")    
}

console.log(reverseString("vinesh"))

// let str = "string";
// console.log(str.split("").reverse().join(""))
