// 38. Write a JavaScript program to check a student's total marks 
// in various examinations. The student will get A+ grade if the total 
// marks are in the range 89..100 inclusive, if the examination is "Final-exam"
// the student will receive A+ grade and total marks must be greater than or equal to 90. 
// If the student gets an A+ grade, return true, otherwise return false.  

studentGradeCreator=(marks,finalExam)=>{
    if(finalExam){
        return marks >= 90;
    }
    return marks >= 89 && marks <= 100   
}

// console.log(studentGradeCreator(99," "))
// console.log(studentGradeCreator(29,true))
console.log(studentGradeCreator("99", "true "))
console.log(studentGradeCreator("89", "true "))
console.log(studentGradeCreator("78", " "))