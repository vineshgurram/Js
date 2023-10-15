// OBJECT DESTRUCTING 

// let obj = {
//     name : "John Doe",
//     age : 33,
//     education : "Degree",
//     experience : "fresher",
//     location : "UK",
//     hobbies : ["writing","coding","playing"],
// }

// let { name, age, education,experience,...other} = obj;

// console.log(name);
// console.log(education);
// console.log(age);
// console.log(experience);
// console.log(other);

// let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
// console.log(alphabet);

// OBJECT INSIDE ARRAYS

// const nestArray = [
//     {
//         userId : 1,
//         userName : "Vinesh",
//         userAge : 22
//     },
//     {
//         userId : 2,
//         userName : "Dinesh",
//         userAge : 32
//     },
//     {
//         userId : 3,
//         userName : "Nilesh",
//         userAge : 12
//     },
// ]

// let [ {userName:user1}, {userId:user2}, {userAge:user3}] = nestArray;

// console.log(user1);
// console.log(user2);
// console.log(user3);

let obj2 = {
    studentName : "Vinesh Gurram",
    studentAge : 22,
    studentEdu : "Degree",
}

const { studentName:a, studentEdu:b} = obj2;

console.log(a)
console.log(b)
