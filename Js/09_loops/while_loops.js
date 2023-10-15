document.querySelector("h1").innerText= "while loops";
let i = 0;
while(i<=10){
    console.log(i);
    i++
}

// first n natural numbers
console.clear();
let sum = 0;
let j = 0;
while(j<=10){
    sum +=j;
    j++;
}
console.log(sum);

// 1,2,3,4,5,6,7,8,9,10 = 55

// using formula (n(n+1))/2

let formula = (10*(10+1)/2);
console.log(formula);