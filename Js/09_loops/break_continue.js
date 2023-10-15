document.querySelector("h1").innerText = "Break and continue";

// break
// break stop the execution of the loops if condition is true

for(let i = 0; i < 10;i++){
    if(i==4){
        break
    }
    console.log(i);
}

console.clear()


for(let j = 0; j < 10;j++){
    if(j==4){
        continue
    }
    console.log(j);
}