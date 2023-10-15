/* 

Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 

*/

let todayDate = new Date();

console.log(todayDate);
// console.log(todayDate.getUTCFullYear())
// console.log(todayDate.getDate());
// console.log(todayDate.getMonth()+ 1);

let monthDayYear = (todayDate.getMonth() + 1) + "/" + (todayDate.getDate()) + "/" + (todayDate.getUTCFullYear()) ;

document.getElementById("mdy").innerText = monthDayYear;

console.log(monthDayYear);

monthDayYear = (todayDate.getMonth() + 1) + "-" + (todayDate.getDate()) + "-" + (todayDate.getUTCFullYear()) ;

document.getElementById("h-mdy").innerText = monthDayYear;

console.log(monthDayYear);

let dayMonthYear =  (todayDate.getDate()) + "/" +(todayDate.getMonth()+ 1) + "/" + (todayDate.getUTCFullYear());

console.log(dayMonthYear);

document.getElementById("dmy").innerText = dayMonthYear;

