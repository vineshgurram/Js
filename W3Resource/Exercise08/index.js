

// Write a JavaScript program where the program takes a random integer 
// between 1 and 10, and the user is then prompted to input a guess number.
// The program displays a message "Good Work" if the input matches the guess 
// number otherwise "Not matched".


// console.log(Math.floor(Math.random()*10)+1)

let randomNumber = Math.floor(Math.random()*10)+1;

let guessNumber = prompt("Guess a Number from 1 to 10 : ");

if(guessNumber === randomNumber){
    alert("Good Work");
}
else{
    alert("Not matched it's "+ randomNumber);
}