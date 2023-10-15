// 2. Reverse. Write a function that reverts the input array. 
// Please, do not use array.reverse(); 
// to make this task more enjoyable.


// /** 
//   * Task description: Write a method that reverts input array 
//   * Expected Result: [1, 2, 3] => [3, 2, 1] 
//   * Task Complexity: 1 of 5 
//   * @param {Array} array - Array of any elements 
//   * @returns {Array} 
// */
// const reverse = (array) => {
//     throw new Error('Put your solution here');
//    }
//    const data = [1, 2, 3];
//    console.log(reverse(data)); // [3, 2, 1]

reverseArray = (arr) =>{
    let revArr = [];
    for(let i=arr.length;i>0;i--){
        revArr.push(i);
    }
    return revArr
}

console.log(reverseArray([1, 2, 3]))