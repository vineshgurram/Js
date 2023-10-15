// 2. Write a JavaScript function to clone an array.


// USING SLICE METHOD
cloneNewArray = (array) =>{
    let newArray = array.slice(0)
    return newArray
}

// USING CONCAT METHOD
let myNewArray = function(array){
    let cloneArr = [].concat(array);
    return cloneArr
}


let arr = [1,2,3,true,12n,undefined,null];
let brandNewArray = cloneNewArray(arr);
console.log(brandNewArray);
brandNewArray = myNewArray(arr);
console.log(brandNewArray);

arr = [1, 2, 4, 0];
brandNewArray = myNewArray(arr);
console.log(brandNewArray);
