function calculateLargestNumber(num1, num2, num3){
    
    return (num1 > num2 && num1 > num3) ? `${num1} (The Largest Number)` : (num2 > num1 && num2 > num3) ? `${num2} (The Largest Number)` : `${num3} (The Largest Number)`;
   
}

console.log(calculateLargestNumber(45, 78, 33));