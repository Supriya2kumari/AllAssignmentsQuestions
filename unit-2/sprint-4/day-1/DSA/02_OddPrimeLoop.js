function primeLoopCheck(num){
	for(let i = 2; i <= num; i++){
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
