// Given array arr of n integers, find average

function average(n, arr){
    let sum = 0;
    for(let i = 0; i < n; i++){
      sum += arr[i];
    }
    let average = Math.ceil(sum / n);
    console.log(average);
}
average(5, [10, 20, 3, 7, 11]);
  