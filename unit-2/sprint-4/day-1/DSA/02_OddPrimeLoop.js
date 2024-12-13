/* print all the odd prime numbers between 1 and given 'N',
   1 should not included, print in different line
	e.g. N = 10
	output : 3 5 7
*/

function primeLoopCheck(N){
	for(let i = 2; i <= N; i++){
	  if(i % 2 === 1){
	    let factor = 0;
	    for(let j = 1; j <= i; j++){
	      if(i % j === 0){
	        factor++;
	      }
	    }
	    if(factor === 2){
	      console.log(i);
	    }
	  }
	}
}
primeLoopCheck(10);
