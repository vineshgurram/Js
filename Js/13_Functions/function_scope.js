// BLOCK SCOPE AND Function

// FUNCTION SCOPE
// Function scope in JavaScript means that variables declared
// inside a function are only accessible within that function.
// They cannot be accessed from outside the function.

// BLOCK SCOPE
// Block scope in JavaScript means that variables declared
// inside a block are only accessible within that block.
// A block is a set of code enclosed in curly braces ({}).


{
  var blockScope = 23;
  console.log(blockScope);
}

console.log(blockScope);

let h = "hello";
function addTwo(a,b){
  console.log(h)
  return h;
}

addTwo()
