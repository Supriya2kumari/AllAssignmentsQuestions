// Given array A of N integers, reverse the even numbers and count

function reverseEvens(N,A){
    let temp = [];
    let count = 0;
    for(let i = N-1; i >= 0; i--){
      if(A[i] % 2 === 0){
        count++;
        temp.push(A[i]);
      }
    }
    console.log(count);
    console.log(temp.join(' '));
}
reverseEvens(6, [11, 20, 2, 17, 5, 26]);  