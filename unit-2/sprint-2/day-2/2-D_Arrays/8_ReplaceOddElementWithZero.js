function replaceOdd(matrix){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] % 2 !== 0){
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

replaceOdd(matrix);