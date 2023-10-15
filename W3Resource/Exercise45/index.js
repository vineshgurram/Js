// Write a JavaScript program that checks two integer values and 
// returns true if either one is 15 or if their sum or difference is 15.  

// BREAKDOWN
// CREATE TWO INTEGER VALUE 
// RETURN TRUE IF ONE OF THME IS 15 OR SUM OF TWO NUMBERS IS 15

sumOrDifferenceNumber = (a,b) =>{
    return (a+b==15 || a==15 || b==15)? true : false
}

// console.log(sumOrDifferenceNumber(6,10));
console.log(sumOrDifferenceNumber(15, 9));
console.log(sumOrDifferenceNumber(25, 15));
console.log(sumOrDifferenceNumber(7, 8));
console.log(sumOrDifferenceNumber(25, 10));
console.log(sumOrDifferenceNumber(5, 9));
console.log(sumOrDifferenceNumber(7, 9));
console.log(sumOrDifferenceNumber(9, 25));