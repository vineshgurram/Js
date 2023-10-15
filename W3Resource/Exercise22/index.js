// 22. Write a JavaScript program to remove a character 
// at the specified position in a given string and return the
// modified string.  

// STEPS =>
// --> 1. TAKE STRING 
// --> 2. TAKE POSTION 
// --> 3. IDENTIFY STRING INDEX OF 
// --> 4. MODIFY STRING
// --> 5. THEN RETURN 


// USING STRING SUBSTRING MEHTOD
function removeCharacter(userString , stringPosition){
    part1 = userString.substring(0, stringPosition);
    part2 = userString.substring(stringPosition + 1, userString.length);
    console.log(part1 + part2)
}

removeCharacter("vinesh",4);

// USING STRING REPLACE METHOD
function removeCharacterReplace(userString , stringPosition) {
    result = userString.replace(userString[stringPosition],"");
    console.log(result)
}

removeCharacterReplace("vinesh",4)




