function simpleInterestCalculator(P, R, T){
    //calculate simple interest using principal, rate and time
    let simpleInterest = (P * R * T) / 100;
    return simpleInterest.toFixed(1);
}
console.log(simpleInterestCalculator(1000, 5, 3));
console.log(simpleInterestCalculator(1500, 7, 5));
console.log(simpleInterestCalculator(0, 6, 2));