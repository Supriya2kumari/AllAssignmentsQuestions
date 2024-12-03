/*  []  []  []  []  []  
     []  []  []  []  []
    []  []  []  []  []
     []  []  []  []  []

     Height(H) = 4, width(W) = 5
*/

function brickWallPattern(H, W){
    for(let i = 1; i <= H; i++){
        let temp = "";
        for(let j = 1; j <= 2*W; j++){
            if((i + j) % 2 === 0){
                temp += "[]";
            } else{
                temp += " ";
            }
        }
        console.log(temp);
    }
}
brickWallPattern(4, 5);