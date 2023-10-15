// ITERATE OBJECTS

// FOR IN LOOPS
// OBJECT.KEYS -- RETURNS KEY IN ARRAY

let obj = {
    name : "Vinesh Gurram",
    age : 22,
    education : "Degree"
}

for(let key in obj){
    console.log(obj[key]);
}

for(let key of Object.keys(obj)){
    console.log(obj[key]);
}


// console.log(Object.keys(obj));


