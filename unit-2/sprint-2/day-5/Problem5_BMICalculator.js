function bmiCalculator(weight, height){
    if(height === 0){
        return `Invalid input, height can not be zero.`
    }
    
    if(height < 0 || weight < 0){
        return `Invalid input, height and weight must be positive numbers.`
    }
    
    let bmi = (weight / (height * height)).toFixed(2);
    
    return `Your BMI is: ${bmi}`
}
    
console.log(bodyMassIndexCalculator(70, 1.75));
console.log(bodyMassIndexCalculator(55, 1.60));
console.log(bodyMassIndexCalculator(90, 1.80));