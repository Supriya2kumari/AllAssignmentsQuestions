/*  Buterfly Pattern
          n = 3                   n = 5
        *       *           *               *
        * *   * *           * *           * *
        * * * * *           * * *       * * *
        * *   * *           * * * *   * * * *
        *       *           * * * * * * * * *
                            * * * *   * * * *
                            * * *       * * *
                            * *           * *
                            *               *

*/

function butterflyPattern(n){
    for(let i = 1; i <= n-1; i++){
        let temp = "";
        for(let j = 1; j<= i; j++){
            temp += "*";
        }
        for(let k = 1; k <= 2*(n-i)-1; k++){
            temp += " ";
        }
        for(let j = 1; j <= i; j++){
            temp += "*";
        }
        console.log(temp);
    }

    let temp = "";
    for(let i = 1; i <= 2*n-1; i++){
        temp += "*";
    }
    console.log(temp);

    for(let i = 1; i <= n-1; i++){
        let temp1 = "";
        for(let j = n-i; j >= 1; j--){
            temp1 += "*";
        }
        for(let k = 2*i-1; k >= 1; k--){
            temp1 += " ";
        }
        for(let j = n-i; j >= 1; j--){
            temp1 += "*";
        }
        console.log(temp1);
    }
}
butterflyPattern(5);