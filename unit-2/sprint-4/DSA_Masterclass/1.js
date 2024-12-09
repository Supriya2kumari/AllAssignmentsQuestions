function fun(arr, n, k){
    arr.sort();
    let low = 0;
    let high = n-1;
    while(low < high){
        if(arr[low] + arr[high] === k){
            console.log(true);
        }
        if(arr[low] + arr[high] < k){
            low++;
        } else{
            high--;
        }
    }
    console.log(false);
}

let arr = [7, 4, 9, 6, 21, 8, 11, 17]
let k = 16;
let n = arr.length;

fun(arr, n, k);