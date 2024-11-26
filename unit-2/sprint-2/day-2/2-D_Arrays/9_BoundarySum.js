function boundarySum(matrix){
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(i === 0 || j === 0 || i === matrix.length-1 || j === matrix[0].length-1){
                sum += matrix[i][j];
            } 
        }
    }
    console.log(sum);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

boundarySum(matrix);