let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result = "";
let rowStart = matrix.length-1;
let rowEnd = 0;
let colStart = 0;
let colEnd = matrix[0].length-1;

for(let i = rowStart; i >= rowEnd; i--){
    result += matrix[i][colStart] + " ";
}
colStart++;

for(let i = colStart; i <= colEnd; i++){
    result += matrix[rowEnd][i] + " ";
}
rowEnd++;

for(let i = rowEnd; i <= rowStart; i++){
    result += matrix[i][colEnd] + " ";
}
colEnd--;

for(let i = colEnd; i <= colStart; i++){
    result += matrix[rowStart][i] + " ";
}

console.log(result);