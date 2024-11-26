function diagSum(matrix){
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        // for(let j = 0; j < matrix[0].length; j++){
        //     if(i === j){
        //         sum += matrix[i][j];
        //     }
        // }

        sum += matrix[i][i];
    }
    console.log(sum);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
diagSum(matrix);