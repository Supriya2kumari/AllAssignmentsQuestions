/* N = 5
   * * * * *
   *
   * 
   * 
   * * * * *
 
*/

function patternC(n) {
    let temp = "";
    for(let i = 1; i <= n; i++){
        temp += "*";
        if(i < n) temp += " ";
    }
    console.log(temp);

    for(let i = 1; i <= n - 2; i++){
        console.log("*");
    }

    let temp1 = "";
    for(let i = 1; i <= n; i++){
        temp1 += "*";
        if(i < n) temp1 += " ";
    }
    console.log(temp1);
}
patternC(5);


/* N = 5
   * * * * *
   *       *
   *       *
   *       *
   *       *
*/

function patternCDown(n) {
    let temp = "";
    for(let i = 1; i <= n; i++){
        temp += "*";
        if(i < n) temp += " ";
    }
    console.log(temp);

    for(let i = 1; i <= n-1; i++){
        let temp1 = "*";
        for(let j = 1; j <= 2*n-3; j++){
            temp1 += " ";
        }
        temp1 += "*";
        console.log(temp1);
    }
}
patternCDown(5);