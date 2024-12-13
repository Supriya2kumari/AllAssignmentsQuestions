/* Given a string and 
*/

function solve(N,S,L,R){
  let temp = S.slice(L, R+1);
  let rev = "";
  for(let i = temp.length-1; i >= 0; i--){
    rev += temp[i];
  }
  let leftRemaining = S.slice(0, L);
  let rightRemaining = S.slice(R+1);
  rev = leftRemaining + rev + rightRemaining;
  //rev += remaining;
  console.log(rev)
}