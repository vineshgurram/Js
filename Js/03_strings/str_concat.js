// string concat

let age = 21;
let name = "Vinesh";


// traditonal way of using string concatenation 
let strConcat = "My name is " + name + ".My age is " + age;
console.log(strConcat);

// new way of using template string
let tempStr = `My age is ${age}.My name is ${name}.`;
console.log(tempStr);
