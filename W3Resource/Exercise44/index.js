// 44. Write a JavaScript program to check from three given integers whether 
// a number is greater than or equal to 20. It is less than the others.  

checkThreeNumber = (a,b,c) =>{
    if(true){
        return (a>=20 && (a<b || b<c)) || (b>=20 && (b<c || a<c)) || (c>=20 && (c<a || c<b))
    }
}

console.log(checkThreeNumber(23, 45, 10));
console.log(checkThreeNumber(23, 23, 10));
console.log(checkThreeNumber(21, 66, 75))