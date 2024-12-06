function mapCharAndSum(N,K,str) {
    let sum = 0;
    for(let i = 0; i < K; i++){
      let mappedValue = str[i].charCodeAt() + N - "a".charCodeAt();
      sum += mappedValue;
    }
    console.log(sum);
}
mapCharAndSum(30, 4, "abcd");