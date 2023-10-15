// Else if 
// we can check mutiple condition at a time 

document.querySelector("h1").innerText = "Else if Statements";

let winningNumber = 12;

let userGuessNumber = 11;

if(winningNumber == userGuessNumber){
    console.log("Correct");
}
else if(winningNumber > userGuessNumber){
    console.log("Too Low");
}
else if(winningNumber < userGuessNumber){
    console.log("Too High");
}
else{
    console.log("Incorrect");
}
