//Create 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0]);
console.log(matrix[0][1]);
console.log(matrix[2][1]);
console.log(matrix[1][2])

let mat = [
    [18, 24, 1],
    [45, 67, 88],
    [90, 98, 87],
    [12, 16, 19]
];
console.log(mat[2][1]);

let rows = mat.length;
let cols = mat[0].length;
console.log(`Rows: ${rows}, Columns: ${cols}`);

mat[0][1] = 100;
console.log(mat);