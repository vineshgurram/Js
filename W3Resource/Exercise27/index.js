// 27. Write a JavaScript program to check whether a string starts with
// 'Java' if it does not otherwise.  

function stringJavaOrNot(string) {
    if (string.length < 3) {
        return false
    }
    else {
        if (string.substring(0, 4) == "Java") {
            return true
        }
        else {
            return false
        }
    }

}

console.log(stringJavaOrNot("JavaScript"));
console.log(stringJavaOrNot("Java"));
console.log(stringJavaOrNot("Python"));
console.log(stringJavaOrNot("J"));
