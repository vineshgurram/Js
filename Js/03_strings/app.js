/* Strings */

let text = "   DevTools    ";
console.log(text);

/* trim() Method  */
// text.trim(); 
// -> this can't work because strings are immutable
// -> this returns new string
// -> reassign it to itself or another variable

text = text.trim();
console.log(text);

/* toUpperCase() Method   */
text = text.toUpperCase();
console.log(text);


/* toLowerCase() Method */
text = text.toLowerCase();
console.log(text);

/* length Property */

console.log(text.length);


/* Some more strings methods */

console.log(typeof text);

text = String(text);
console.log(typeof text);

text = Number(text);
console.log(typeof text);

text = "Devtools";
console.log(text);

// convert string to number 




