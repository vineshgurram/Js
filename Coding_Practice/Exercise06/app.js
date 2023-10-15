// /** 
//   * Task description: Write a method that returns a duplicate-free
//   *  array 
//   * Expected Result: Duplicate-free array
//   *  [1, 2, 3, 1, 2] => [1, 2, 3] 
//   * Task Complexity: 2 of 5 
//   * @param {Array<string | number>} array - Array of primitive data types 
//   * @returns {Array} 
// */
// const unique = (array) => {
//     throw new Error('Put your solution here');
//    }
//    const data = [1, 2, 1, 2, 3];
//    console.log(unique(data)); // [1, 2, 3]

const data = [1, 2, 1, 2, 3];


const duplicateFreeArray = (arr) =>{
    // USING PUSH AND INDEXOF METHOD 
    // if(typeof arr == "undefined"){
    //     arr = [1,3];
    // }

    // let emptyArr = [];
    // for(let i of arr){
    //     if(emptyArr.indexOf(i) == -1){
    //         emptyArr.push(i);
    //     }
    // }

    // USING SET METHOD
    let emptyArr = [...new Set(arr)];
    return emptyArr
}
// console.log(arr)
console.log(duplicateFreeArray(data))

