// Write a JavaScript program to calculate the days left before Christmas.

let today = new Date();

// document.querySelector("#date").textContent=today;

// firstly we get our current date 

console.log("Today's date :", today);


// set christmus date  using date object
let cMas = new Date(today.getFullYear(), 11, 25);


console.log(cMas);

if (today.getFullYear() == 11 && today.getDate > 25) {
    cMas.setFullYear(cMas.getFullYear() + 1);
}

let oneDay = 1000 * 60 * 60 * 24;

console.log(oneDay);

console.log(Math.ceil((cMas.getTime() - today.getTime()) / oneDay));
