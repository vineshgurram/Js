// 4. Write a JavaScript function to get the last element of an
// array. Passing the parameter 'n' will return the last 'n' 
// elements of the array.

lastElementArray = (array,n=1) =>{
    let lasEle = array.slice(-n);
    return lasEle
}

let arr = [1,2,3,4,5,6];
console.log(arr.slice(-4));

console.log(lastElementArray([7, 9, 0, -2]));
console.log(lastElementArray([7, 9, 0, -2],3));
console.log(lastElementArray([7, 9, 0, -2],6));

//4
//-4


