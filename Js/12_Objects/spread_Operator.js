// SPREAD OPERATOR IN OBJECTS

const obj1 = {
    s1 : "tony",
    s2 : "tom",
    s3 : "john"
}

const obj2 = {
    s1 : "vinesh",
    s4 : "otis",
    s5 : "ruby",
}

// IF WE WANT TO CLONE ANY OBJECT THEN WE USE SPREAD OPERATOR
// ... spread operator

// IN OBJECT ONLY ONE KEY ARE ALLOWED WHICH MEANS WE CAN'T 
// USE MORE THAN ONE KEY IN OBJECTS

const mix = {...obj1, ...obj2,s6:"hello",s7:"dora"}

console.log(mix);

// EACH CHARACTER OF STRING WILL HAVE ITS INDEX NO. AS KEY
const strObj = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(strObj);