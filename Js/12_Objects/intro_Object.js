// INTRO TO OBJECTS 

// OBJECTS ARE KEY AND VALUE PAIRS
// OBJECTS ARE REFERENCE TYPE IT IS LIKE ARRAYS
// OBJECTS ARE BEGINS AND ENDS WITH CURLY BRACKETS {-----}

let obj = {name: "Vinesh",age:22};

// WE CAN ACCESS OBJECT USING DOT NOTATION (obj.key) JUST LIKE BELOW 
console.log(obj.name);
console.log(obj.age);

// WE CAN ACCESS OBJECT USING BRACKET NOTATION (obj["key"]) JUST LIKE BELOW
// ONLY INVERTED COMMAS FOR OBJECT KEYS
console.log(obj["age"]);
console.log(obj["name"]);

// WE CAN ADD KEYS PAIRS IN OBJECT 
obj.gender = "M";
console.log(obj);

// WE CAN ALSO ADD KEYS PAIRS IN SPACES USING INVERTED COMMAS
// obj.person hobbies = "drawing"; --> THIS IS NOT ALLOWED SO WE USE BRACKET NOTATION
obj["person hobbies"] = "drawing";
console.log(obj);

// WHAT IF WE WANT TO ADD KEY NAME FROM A VARIABLE WHICH STORED STRING
    
let key = "person education";
// obj.key= "www"; // IT WILL STORE AS "key" as a key
obj[key]= "tenth pass";
console.log(obj);





