// 47. Write a JavaScript program to check whether a given 
// number exists in the range 40..10000.  

numberInRange = (fromRange,toRange,num) => {
  return (num > fromRange && num < toRange)
}

console.log(numberInRange(40, 4000, 45));
console.log(numberInRange(80, 79, 320));
console.log(numberInRange(89, 30, 4000))
