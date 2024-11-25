// Sum of even numbers at odd index

let numbers = [1, 2, 3, 4, 5, 6];

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    if(i % 2 !== 0 && numbers[i] % 2 === 0 ){
        sum += numbers[i];
    }
}
console.log(sum);