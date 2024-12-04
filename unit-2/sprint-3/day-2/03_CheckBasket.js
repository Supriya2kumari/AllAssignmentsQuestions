//Given array B, present N elements, check if basket contains 
//single type of item or different

function checkBasket(N,B){
    let flag = true;
    for(let i = 1; i < N; i++){
      if(B[0] !== B[i]){
        flag = false;
        break;
      }
    }
    if(flag){
      console.log("Single Type");
    } else{
      console.log("Mixed Basket");
    }
}
checkBasket(3, ["red", "yellow", "green"]);
checkBasket(3, ["blue", "blue", "blue"]);