// N is given and print inverted L

function invertedL(n){
    let temp = "";
    for(let i = 1; i <= n; i++){
        temp += "*";
        if(i < n){
            temp += " ";
        }
    }
    console.log(temp);
    for(let i = 1; i <= n-1; i++){
        console.log("*");
    }
}
invertedL(5);