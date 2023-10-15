/** 
//   * Task description: Write a method that returns an array 
//   * without listed values 
//   * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3] 
//   * Task Complexity: 2 of 5 
//   * @param {Array} array - Array of primitive data types 
//   * @param {?} args list of values to remove 
//   * @returns {Array} 
// */
// const without = (array, ...args) => {
//     throw new Error('Put your solution here');
//    }
//    const data = [1, 2, 3, 1, 2];
//    console.log(without(data, 1, 2)); // [3]
// rest parameter    

without = (arr, ...args) => {
    let arugment = args;
    // return arr.filter(item => !arugment.includes(item));
    return arr.filter(item => arugment.indexOf(item) === -1)
}

console.log(without([1, 2, 3, 1, 2],1,2));