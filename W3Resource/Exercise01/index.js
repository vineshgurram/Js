let today = new Date();

let dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let todayDay = dayList[today.getDay()];

document.getElementById("js-day").innerText=todayDay;

console.log(todayDay);  

let hour = today.getHours()

console.log(hour);

let time = (hour > 12)? hour-12: hour;

console.log(time)

document.getElementById("js-hour").innerText=time;


let noonDay=(hour >= 12)? "PM":"AM";

document.getElementById("js-noonday").innerText=noonDay;

console.log(noonDay)


let min=today.getMinutes()
document.getElementById("js-min").innerText=min;
console.log(min);

let sec = today.getSeconds();
document.getElementById("js-sec").innerText=sec;
console.log(sec)
