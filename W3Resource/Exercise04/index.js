// Heron's formula for area of traingle

// area = √(s * (s - side1) * (s - side2) * (s - side3))

// "s" is the semiperimeter of the triangle, calculated by adding the lengths of all three sides and dividing by 2

let sideOne = 5;
let sideTwo = 6;
let sideThree = 7;

// Formula for semiperimeter
let s=(sideOne+sideTwo+sideThree)/2;

let areaOfTriangle = Math.sqrt(s*(s-sideOne)*(s-sideTwo)*(s-sideThree));
console.log(areaOfTriangle);


