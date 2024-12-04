/*  Christmas Tree
    n = 4                   n = 5
       *                        *
      ***                      ***
     *****                    *****
    *******                  *******
                            *********
                            
*/

function christmasTree(n){
    for(let i = 1; i <= n; i++){
        let temp = "";
        for(let j = 1; j <= n-i; j++){
            temp += " ";
        }
        for(let k = 1; k <= 2*i-1; k++){
            temp += "*";
        }
        console.log(temp);
    }
}
christmasTree(5);