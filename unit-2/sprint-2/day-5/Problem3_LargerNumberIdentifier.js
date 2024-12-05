function LargerNumber(num1, num2){
    //check, if number 1 is greater, or number two or both are rqual
    if(num1 > num2){
        return `${num1} is larger than ${num2}`;
    } else if(num1 < num2){
        return `${num2} is larger than ${num1}`;
    } else{
        return `Both numbers are equal`;
    }
}
console.log(LargerNumber(5, 10));
console.log(LargerNumber(7, 7));
console.log(LargerNumber(-1, -10));