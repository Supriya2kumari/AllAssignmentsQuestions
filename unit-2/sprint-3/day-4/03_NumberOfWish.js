function numberOfWish(N, S) {
    let count = 0;
    let temp = "";
    for(let i = 0; i <= N-4; i++){
      if (S[i] === 'w' && S[i+1] === 'i' && S[i+2] === 's' && S[i+3] === 'h'){
        count++;
      } 
    }
    console.log(count);
}
numberOfWish("wishwis");
numberOfWish("wishwish");