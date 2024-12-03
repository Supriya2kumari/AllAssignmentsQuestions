let n = 5;
let temp = "";
for(let i = 1; i <= n; i++){
    temp += i;
    console.log(temp);
}
for(let i = n-1; i >= 1; i--){
    let temp1 = "";
    for(let j = 1; j <= i; j++){
        temp1 += j;
    }
    console.log(temp1);
}