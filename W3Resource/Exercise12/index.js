// Write a JavaScript program to get the website URL (loading page).

let url = document.URL;
console.log(url);

let href = location.href;
console.log(href);

let checkDiff = document.URL === location.href ? "Same" : "Different";
console.log(checkDiff);

