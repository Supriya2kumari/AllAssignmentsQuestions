// find the sum of every subarray and print.

function findSubarray(arr){
    for(let i = 0; i < arr.length; i++){
        let temp = [];
        for(let j = i; j < arr.length; j++){
            temp.push(arr[j]);
            console.log(findSum(temp));
        }
    }
}

function findSum(A){
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        sum += A[i];
    }
    return sum;
}

findSubarray([1, 2, 3, 4]);