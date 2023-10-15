// logical operators
// and or not 

document.querySelector("h1").innerText = "Logical Operators";

// and(&&)

let userName = "Vinesh";
let userAge = 21;

// if(userName[0]=="V" && userAge>=22){
//     console.log("If both of conditions are true then its 'AND'.Just like this.");
// }
// else{
//     console.log("Else");
// }

if(userName[0]=="V" || userAge>=22){
    console.log("If anyone of condition are true then its 'OR'.Just like this.");
}
else{
    console.log("Else");
}