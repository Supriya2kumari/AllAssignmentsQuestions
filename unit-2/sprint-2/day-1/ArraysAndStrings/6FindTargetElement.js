// Find and print index if target found in array otherwise, print -1.

function findIndex(arr, target){
    let index = -1
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            index = i;
        } 
    }
    console.log(index);
}

let arr =  ["apple", "banana", "cherry", "date"];
let target = "cherry";
findIndex(arr, target);