// 3. Write a method that clears array from all unnecessary elements,
// like false, undefined, empty strings, zero, null

// /** 
//   * Task description: Write a method that clears array from all
//     unnecessary elements, like false, undefined, empty strings, zero, null 
//   * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
//   * Task Complexity: 1 of 5 
//   * @param {Array} array - An array of any elements 
//   * @returns {Array} 
// */
// const compact = (array) => {
//     throw new Error('Put your solution here');
//    }
//    const data = [0, 1, false, 2, undefined, '', 3, null];
//    console.log(compact(data)) // [1, 2, 3]

clearStuff = (arr) =>{
    // let fill = arr.filter(el=> el);
    let fill = [];
    for(let i = 0; i<arr.length;i++){
        if(arr[i]){

            fill.push(arr[i]);

        }
    }
    return fill
}

console.log(clearStuff([0, 1, false, 2, undefined, '', 3, null]));

// const arr = [0, 1, false, 2, undefined, '', 3, null];
//    for(let i=0; i<arr.length;i++){
//        console.log(arr)
//     if(arr[i] == false){
//         arr.splice(arr[i],1);
//     }
// }

// let filter = arr.filter(el=> el);
// console.log(filter);