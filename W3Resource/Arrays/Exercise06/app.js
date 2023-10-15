// 6. Write a JavaScript program that accepts a number 
// as input and inserts dashes (-) between each even number.
// For example if you accept 025468 the output should be 
// 0-254-6-8.


// BREAKDOWNS
// TAKES A NUMBER AS AN INPUT 
// INSERTS DASHES (-) BETWEEN EVEN NUMBERS

let dashesBetweenEvenNumber = function(number){
    // let number = "025468";
    let string = number.toString();
    let result = [string[0]];
    for(let i = 1; i<string.length; i++){
        if(string[i-1]%2==0 && string[i]%2==0){
            result.push("-",string[i]);
        }
        else{
            result.push(string[i]);
        }
    }
    result = result.join("");
    // console.log(result)
    return result
}

let num = prompt("Enter a number");
console.log(dashesBetweenEvenNumber(num))

// console.log(dashesBetweenEvenNumber(241));
// console.log(dashesBetweenEvenNumber("025468"));

