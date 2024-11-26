function sumOfTwoMatrix(mat1, mat2){
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        for(let j = 0; j < mat2.length; j++){
            result.push(mat1[i][j] + mat2[i][j]);
        }
    }
    console.log(result);
}
let mat1 = [
    [1, 2],
    [3, 4]
];

let mat2 = [
    [2, 6],
    [4, 8]
];

sumOfTwoMatrix(mat1, mat2)