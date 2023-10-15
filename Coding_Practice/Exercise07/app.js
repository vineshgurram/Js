// /** 
//   * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical. 
//   * Expected Result: ([1, 2, 3], [1, 2, 3]) => true 
//   * Task Complexity: 2 of 5 
//   * @param {Array} firstArray - Array of primitive data types 
//   * @param {Array} secondArray - Array of primitive data types 
//   * @returns {boolean} 
// */
// const isEqual = (firstArray, secondArray) => {
//     throw new Error('Put your solution here');
//   }
//   const arr1 = [1, 2, 3, 4];
//   const arr2 = [1, 2, 3, 4];
//   const arr3 = [1, 2, 3, 5];
//   const arr4 = [1, 2, 3, 4, 5];
//   console.log(isEqual(arr1, arr2)); // true
//   console.log(isEqual(arr1, arr3)); // false
//   console.log(isEqual(arr1, arr4)); // false

  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4];
  const arr3 = [1, 2, 3, 5];
  const arr4 = [1, 2, 3, 4, 5];

  // we can convert an array into string after that we can convert them
  const isEqual = function(arrayOne,arrayTwo){
    // return arrayOne.toString() == arrayTwo.toString()  
    return JSON.stringify(arrayOne) == JSON.stringify(arrayTwo);
}

console.log(isEqual(arr1,arr2))
console.log(isEqual(arr1,arr3))
console.log(isEqual(arr1,arr4))