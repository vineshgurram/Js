// 46. Write a JavaScript program to check two given
// non-negative integers if one (not both) is a 
// multiple of 7 or 11.  


numberDivisibleOrNot = (a,b) => {
    return (!(a%7==0 || a%11==0) && (b%7==0 || b%11==0))?true:false

}

console.log(numberDivisibleOrNot(14, 21));