// 25. Write a JavaScript program to check whether a 
// given positive number is a multiple of 3 or 7.  

function multipleOfSevenOrThree(number){
    if(number % 3 == 0 || number % 7 == 0){
        return true
    }
    else{
        return false
    }
}



console.log(multipleOfSevenOrThree(1));
console.log(multipleOfSevenOrThree(2));
console.log(multipleOfSevenOrThree(3));
console.log(multipleOfSevenOrThree(9));