/* Pattern of L
    N = 5

    *
    *
    * 
    * 
    * * * * *
*/

function fun(N){
    for(let i = 1; i <= N-1; i++){
        console.log("*");
    }
    let temp = "";
    for(let i = 1; i <= N; i++){
        temp += "* ";
    }
    console.log(temp);
}
fun(5);