/* n = 5
    * * * * *
            *
            * 
            * 
    * * * * *
*/

function cPattern(n){
    let temp = "";
    for(let i = 1; i <= n; i++){
        temp += "*";
        if(i < n) temp += " ";
    }
    console.log(temp);

    for(let i = 1; i <= n-2; i++){
        let temp1 = "";
        for(let i = 1; i <= (n-1)*2; i++){
            temp1 += " ";
        }
        temp1 += "*"
        console.log(temp1);
    }

    let temp2 = "";
    for(let i = 1; i <= n; i++){
        temp2 += "*";
        if(i < n) temp2 += " ";
    }
    console.log(temp2);
}
cPattern(5);