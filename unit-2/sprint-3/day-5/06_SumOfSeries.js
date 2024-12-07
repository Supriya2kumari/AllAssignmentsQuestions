// X and N are given, find sum of series 1 + x + x*x + x*x*x .....N terms
//N = 3, X = 2, 1 + 2 + 2*2 = 1 + 2 + 4 = 7 

function sumOfSeries(N, X) {
    if(N <= 0 || X <= 0){
      console.log(-1);
      return;
    }
    let sum = 0;
    for(let i = 0; i <= N-1; i++){
      sum += X**i;
    }
    console.log(sum);
}  
sumOfSeries(3, 2);