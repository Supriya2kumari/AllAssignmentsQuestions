/* Pascal Triangle
    n = 4                   n = 3 
    
       *                       *  
     *   *                   *   * 
   *   *   *               *   *   *
 *   *   *   *


*/

function pascalTriangle(n){
    for(let i = 1; i <= n; i++){
        let temp = "";
        for(let j = 1; j <= n-i; j++){
            temp += " ";
        }
        for(let k = 1; k <= i; k++){
            temp += "*";
            if(k < n) temp += " ";
        }
        console.log(temp);
    }
}
pascalTriangle(4);