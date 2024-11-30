let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
];
let N = matrix.length;
let M = matrix.length;

let res = "";
for(let i = 0; i < N; i++){
    if(i % 2 === 0){
        for(let j  = M; j >= 0; j--){
            res += matrix[i][j] + " ";
        }
    } else {
        for(let j  = 0; j <= M; j++){
            res += matrix[i][j] + " ";
        }
    }
}
console.log(res);