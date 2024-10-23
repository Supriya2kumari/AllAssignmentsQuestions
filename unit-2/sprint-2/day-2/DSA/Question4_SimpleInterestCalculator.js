function simpleInterestCalculator(principal, rate, time){

    if(principal < 0 || rate < 0 || time < 0){
      return `Invalid input, all values must be non-negative.`
    }
    let simpleInterest = ((principal * rate * time) / 100).toFixed(1);
    
    return `The simple interest is: ${simpleInterest}.`
  }
  
  console.log(simpleInterestCalculator(1000, 5, 3));
  console.log(simpleInterestCalculator(1500, 7, 5));
  console.log(simpleInterestCalculator(0, 6, 2));
  console.log(simpleInterestCalculator(0, -6, 2));
  