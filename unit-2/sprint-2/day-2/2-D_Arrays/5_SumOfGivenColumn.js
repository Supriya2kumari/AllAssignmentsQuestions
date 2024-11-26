function sumCol(matrix, col){
    let sum = 0;

    for(let i = 0; i < matrix.length; i++){
        sum += matrix[i][col];
    }
    console.log(sum);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sumCol(matrix, 2)
sumCol(matrix, 1)