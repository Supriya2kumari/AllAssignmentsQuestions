/* n = 1         n = 4
    \/          \      /
                 \    /
                  \  /
                   \/
*/

function vPattern(n){
    for(let i = 1; i <= n; i++){
        let temp = "";
        for(let j  = 1; j <= i-1; j++){
            temp += " ";
        }
        temp += "\\";
        for(let j = 1; j <= 2*(n - i); j++){
            temp += " ";
        }
        temp += "/";
        console.log(temp);
    }
}
vPattern(1);
console.log();
vPattern(4);