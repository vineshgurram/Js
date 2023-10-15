// Write a JavaScript program to find the most frequent item of an array.

const arr = [1,2,2,"a","a","a"];

let mostFrequent = 1; //2
let count = 0;
let item;

for(let i = 0; i<arr.length; i++){ //0 1 2 3
  for(let j = i; j<arr.length;j++){//0 1 2 3 4 5 // 1 2 3 4 5 // 2 3 4 5 //  3 4
    if(arr[i] == arr[j]){ // 1--t , 2--f , 2--f , "a"--f , "a"--f ,"a"--f // 2--t 2--t "a" --f // "a"-- t "a"--t
      count++; // 1 2
    }
    if(mostFrequent < count){ // f
      mostFrequent=count;
      item = arr[i]; //2
    }
  }
  count = 0;
}
