//  5.Write a simple JavaScript program to join all elements
// of the following array into a string.

let myColor = ["Red", "Green", "White", "Black"];

joinArrayElement = (array,input=",") =>{
    let arrayString = array.join(input);
    return arrayString
}

console.log(joinArrayElement(myColor));
console.log(joinArrayElement(myColor,"+"));

