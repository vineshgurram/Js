// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

function multiply() {
    let a = document.getElementById("firstNum").value;
    let b = document.getElementById("secNum").value;
    document.querySelector("#result").textContent="Result : "+ a*b;
}

function divide() {
    let a = document.getElementById("firstNum").value;
    let b = document.getElementById("secNum").value;    
    document.querySelector("#result").textContent="Result : "+ a/b;
}

