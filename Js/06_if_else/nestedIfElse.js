console.log("Nested If Else");

// Nested If Else 
// condition inside condition statemnt

let winningNumber = 10;

let userGuessNumber = +prompt("Guess number from 1-10");

console.log(userGuessNumber);

if(userGuessNumber > 10){
    console.log("Too High");
}
else{
    if(userGuessNumber < 10){
        console.log("Too Low");
    }
    else{
        console.log("Correct");
    }
}