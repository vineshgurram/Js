// /**
//  * Task description: Write a method that returns an
//  * object composed of key-value pairs.
//  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
//  * Task Complexity: 2 of 5
//  * @param {Array} array - a deep array of pairs
//  * @returns {Array}
//  */
// export const fromPairs = (array) => array.reduce((acc, value) => {
//     if (Array.isArray(value)) {
//       acc[value[0]] = value[1];
//     }
//     return acc;
//   }, {});

// MAKE A OBJECT USING ABOVE ARRAY AND MAKE
// [KEY, VALUE] ==> {KEY:VALUE}
//  Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

let arr = [['a', 1], ['b', 2]];
// USING OLD TRADITONAL METHOD
// FOR LOOPS
// arrayToObject = (arr) =>{
//     let newObj = {};
//     for(let i = 0; i<arr.length;i++){
//         newObj[arr[i][0]] = arr[i][1];
//     }
//     return newObj
// }

// USING CHATGPT SOLUTION 
// MODERN WAY OF SOLVING DESTRUCTING
arrayToObject = (arr) =>{
    let newObj = {};
    for(let i = 0; i<arr.length;i++){
        let [ key, value] = arr[i];
        newObj[key] = value;
    }
    return newObj
}

console.log(arrayToObject([['a', 1], ['b', 2], ['c', 3]]));

