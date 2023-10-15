// 3. Write a JavaScript function to get the first element of 
// an array. Passing the parameter 'n' will return the first 'n'
// elements of the array.

// BREAKDOWNS
// FUNCTION TO GET FIRST ELEMENT OF AN ARRAY
// PASS A PARAMETER 'n'
// RETURN FIRST 'n' ELEMENT OF ARRAY

firstElementArray = (array,n=1) =>{
if(n<0){
    return []
}
let firstEle = array.slice(0,n);
    return firstEle
}

console.log(firstElementArray([7, 9, 0, -2]));
console.log(firstElementArray([],3));
console.log(firstElementArray([7, 9, 0, -2],-3));
console.log(firstElementArray([7, 9, 0, -2],6));
console.log(firstElementArray([7, 9, 0, -2],3));

// let arr = [1.2,3,4,5,6];
// console.log(arr.slice(0,1))




