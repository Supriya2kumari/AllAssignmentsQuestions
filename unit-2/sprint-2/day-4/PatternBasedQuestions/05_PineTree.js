/* N = 5

        *
       ***
      *****
     *******
        |
        
*/

function pineTreePattern(n){
    for(let i = 1; i <= n-1; i++){
        let temp = "";
        for(let j = 1; j <= n-i-1; j++){
            temp += " ";
        }
        for(let k = 1; k <= 2*i-1; k++){
            temp += "*";
        }
        console.log(temp);
    }
    let temp = "";
    for(let i = 1; i <= n-2; i++){
        temp += " ";
    }
    temp += "|";
    console.log(temp);
}
pineTreePattern(5)