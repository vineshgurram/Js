// CALLBACK FUNCTION    

function outerFunction(a){
    console.log(`I am Outer function`);
    a("hello");
}

function innerFunction(b){
    console.log(`I am Inner function ${b} bro`);
}

outerFunction(innerFunction);


// METHODS USING CALLBACK FUNCTION

// forEach()

const arr = [1,2,4,7,8];
// function printnumber(number,index){
//     console.log(number*2)
// }

arr.forEach(num => {
    console.log(`${num*2}`)
})

arr.forEach(function(num){
    console.log(num*2)
})


const arrObj =[
    {
        firstName : "Vinesh",
        age : 22,
        address : "Ulwe"
    },
    {
        firstName : "Ramesh",
        age : 23,
        address : "Sanpada"
    },
    {
        firstName : "Suresh",
        age : 22,
        address : "Vashi"
    },
    {
        firstName : "Mangesh",
        age : 22,
        address : "Panvel"
    },
];

arrObj.forEach(function(arrObj){
    console.log(arrObj.firstName,arrObj.age,arrObj.address);
})


// map method
// returns a new method

let intoTwo = arr.map(function(num){
    return num * 2
});

let firstNameArr = arrObj.map(function(obj){
    return `My name is ${obj.firstName} and my age is ${obj.age}. I live in ${obj.address}`
});

console.log(firstNameArr)

console.log(intoTwo);