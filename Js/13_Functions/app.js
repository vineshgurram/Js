// REST PARAMETERS

function add(a,b,...c){
    let arr = c;
    // console.log(arr) 
    arr.push(a,b);
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    console.log(sum);
}

add(1,2,3,4,5,6,7);