// 1. Write a JavaScript function to check whether an `input`
// is an array or not.

arrayChecker = (input) =>{

    // USING FIRST METHOD -- Array.isArray()
    // if(Array.isArray(input) == true){
    //     return "input is array"
    // }
    // else{
    //     return "input is not array"
    // }

    // USING SECOND MEHTOD -- toString.call() 
    if(toString.call(input)=="[object Array]"){
        return "input is array"
    }
    else{
        return "input is not array"
    }
}

console.log(arrayChecker(""));
console.log(arrayChecker(1));
console.log(arrayChecker([1,2,34,true]));
console.log(arrayChecker({key:"1"}));