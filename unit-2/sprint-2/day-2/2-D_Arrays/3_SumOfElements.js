let scores = [
    [100, 200, 300],
    [50, 60, 70]
];

let sum = 0;
for(let i = 0; i < scores.length; i++){
    for(let j = 0; j < scores[0].length; j++){
        sum += scores[i][j];
    }
}
console.log(sum);