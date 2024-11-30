let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let N = arr.length;
let M = arr[0].length;

for(let i = 0; i < N; i++){
    let result = "";
    for(let j = 0; j < M; j++){
        let sum = i+j;
        result += sum + " "; 
    }
    console.log(result);
}