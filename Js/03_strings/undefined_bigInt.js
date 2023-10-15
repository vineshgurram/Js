console.log("bigInt and undefined");

let a=11n;
console.log(a,typeof a);

let b = BigInt(12);
console.log(b ,typeof b);

let c =12;
// console.log(a+c); // not possible because bigInt type can't be mix up

// bigInt + bigInt --> Only

// bigInt + int/str --> Not possible

console.log(a+b); // Good 



