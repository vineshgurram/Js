// 7. Write a JavaScript program to sort the items of an array.

let arr = [5,3,2,1,4,6];

// first way to sort an array is using sort() mehtod
// this method is making us lazy 
console.log(arr.sort((a, b) => a - b)); // Ascending order
console.log(arr.sort((a, b) => b - a)); // Descending  order

function bubbleSort(arr) {
    const n = arr.length; // 6
 
    // loop till 5th index 
    for (let i = 0; i < n - 1; i++) { // 5  times run loops
        console.log(i,"outer loop")
        for (let j = 0; j < n - i - 1; j++) { // 01234 // 0123 // 012 // 01 // 0 
            console.log(j);
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              }
            }
        }
    }


bubbleSort(arr);


//   const myArray = [5, 2, 9, 1, 5, 6];
//   console.log("Original array:", myArray);
//   console.log("Sorted array:", myArray);

