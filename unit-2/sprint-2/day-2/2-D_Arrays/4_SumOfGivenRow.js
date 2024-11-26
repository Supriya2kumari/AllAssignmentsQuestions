function sumRow(matrix, row){
    let sum = 0;
    // for(let i = 0; i < matrix.length; i++){
    //     if(i === row){
    //         for(let j = 0; j < matrix[0].length; j++){
    //             sum += matrix[i][j];
    //         }
    //     }
    // }

    for(let i = 0; i < matrix[0].length; i++){
        sum += matrix[row][i];
    }
    console.log(sum);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// let row = 2;

sumRow(matrix, 2)
sumRow(matrix, 1)