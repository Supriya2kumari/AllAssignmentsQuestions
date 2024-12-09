function solve(N,S,L,R){
  let temp = S.slice(L, R+1);
  let rev = "";
  for(let i = temp.length-1; i >= 0; i--){
    rev += temp[i];
  }
  let leftRemaining = S.slice(0, L);
  let remaining = S.slice(R+1);
  rev = leftRemaining + rev + remaining;
  //rev += remaining;
  console.log(rev)
}