// 34. Write a JavaScript program to find the largest number from the
// two given positive integers. The two numbers are in the range 
// 40..60 inclusive.  

// BREAKDOWNS
// WE HAVE TWO POSITIVE NUMBERS
// WE HAVE TO FIND LARGEST NUMBERS FROM THOSE NUMBERS
// NUMBERS SHOULD BE IN RANGE OF 40 ----- 60

largestNumber = (a,b) =>{
  if(a >= 40 && a <= 60 && b >= 40 && b <= 60){
    
    if(a == b){
        return "Numbers are same.";
    }
    else if (b > a){
        return b;
    }
    else{
        return a;
    }
  }
  else{
    return "Numbers are not in range.";
  }
}

console.log(largestNumber(40,40))
console.log(largestNumber(45, 60))
console.log(largestNumber(25, 60))
console.log(largestNumber(45, 80))
console.log(largestNumber(50, 50))