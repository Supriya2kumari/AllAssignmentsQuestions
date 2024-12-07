function sumOfDigits(input) {
    let sum = 0;
    while(input > 0){
      let digit = input % 10;
      sum += digit;
      input = Math.floor(input / 10);
    }
    console.log(sum);
}  
sumOfDigits(12345);