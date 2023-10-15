// 35. Write a program to check whether a specified character exists 
// between the 2nd and 4th positions in a given string.  


// USING STRAIGHT FORWARD WAY
characterChecker = (string,char) => {
    if(string[1] == char || string[3] == char){
        return true
    }
    else{
        return false
    }
}

// USING DIFFERENT TECHNIQUE
// characterChecker = (string,char) =>{
//     result = 0;
//     for(let i = 0 ; i < string.length ; i++){
//         if(string.charAt(i) == char && (i>=1 && i<=3)){
//             result = 1;
//             break
//         }
//     }

//     if(result == 1){
//         return true
//     }
//     else{
//         return false
//     }
// }

console.log(characterChecker("vignhesh","i"));
console.log(characterChecker("Python", "y"));
console.log(characterChecker("JavaScript", "a"));
console.log(characterChecker("Console", "o"));
console.log(characterChecker("Console", "C"));
console.log(characterChecker("Console", "e"));
console.log(characterChecker("JavaScript", "S"));
