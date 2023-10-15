// Write a JavaScript program to capitalize the first letter of each word in a given string.

capitalizeFirstWord = (str) =>{
    let wordSplit = str.split(" ");
    // let sentence = "";
    for (item in wordSplit){
        // sentence += wordSplit[item][0].toUpperCase() + wordSplit[item].substring(1) + " ";
        wordSplit[item] = wordSplit[item][0].toUpperCase() + wordSplit[item].substring(1);
    }
    return wordSplit.join(" ")
    // return sentence
}
console.log(capitalizeFirstWord("Hii this is vinesh gurram"))

