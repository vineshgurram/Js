// 19. Write a JavaScript program to check whether a given
// integer is within 20 of 100 or 400.  

let givenNumber = 80;

// for(let i = 20; i<=100 ; i++){
//    if(givenNumber === i){
//     console.log("I got your number.");
//    }
// }

console.log(Math.abs(100-80)<=20 || Math.abs(400-80)<20)

