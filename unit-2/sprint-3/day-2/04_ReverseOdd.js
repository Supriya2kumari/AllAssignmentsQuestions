// Given array A of N integers, reverse the odd numbers and count

function reverseOdds(N, A){
    let temp = [];
    let count = 0;
    for(let i = N-1; i >= 0; i--){
      if(A[i] % 2 !== 0){
        count++;
        temp.push(A[i]);
      }
    }
    console.log(count);
    console.log(temp.join(" "));
}
reverseOdds(6, [10, 15, 20, 7, 23, 11]); 