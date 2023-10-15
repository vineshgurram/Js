// Write a JavaScript program to determine whether a given year
// is a leap year in the Gregorian calendar.

// Leap Years are any year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)
// except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
// except if it can be exactly divided by 400, then it is (such as 2000, 2400)


// using traditional conditional

// 2010

function leapYear(year) {
    if(year % 4 === 0) {   //
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true
            }
            else{
                return false
            }
        }
        else{
            return true
        }
    }
    else{
        return false
    }
    
}

// using ternary operator

function leapyear(year){

    return (year % 4 === 0) ? ((year % 100 === 0) ? (year % 400 === 0): true ): false;

}


let year = 2100;
let leapYearOrNot = leapyear(year);

if (leapYearOrNot) {
    console.log(year + " is Leap Year");
}
else{
    console.log(year + " is not Leap Year");
}

console.log(leapyear(2016));
console.log(leapYear(2016));

console.log(leapyear(2015));
console.log(leapYear(2015));

