// WHILE LOOPS FOR ARRAYS

const fruits = ["apple","mango","banana"];

var i = 0;
while(i < fruits.length){
    // console.log(fruits[i]);
    i++;
}

// FOR OF LOOPS

for(let fruit of fruits){
    console.log(fruit); // to iterate an elements 
}

// FOR IN LOOPS 

for (let fruit in fruits){
    console.log(fruit); // to iterate an elements index
}