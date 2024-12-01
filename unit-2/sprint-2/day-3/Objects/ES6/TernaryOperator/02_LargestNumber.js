let largestNum = (num1, num2, num3) => {
    let largest = -Infinity;

    (num1 > num2 && num1 > num3) ? largest = num1 
    : (num2 > num1 && num2 > num3) ? largest = num2
    : largest = num3;
    console.log(largest);
}

largestNum(45, 78, 33);