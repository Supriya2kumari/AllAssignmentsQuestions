/*  check if array is dominating or not, if frequency of array element is more 
    it is dominating, then print "YES", otherwise print "NO".
    e.g.
    1.)  n = 5, arr = [1, 2, 3, 2, 1]
         output : NO
    2.)  n = 5, arr = [1, 2, 3, 3, 3]
         output : YES
*/

function checkDominatingArray(N,arr){
  let obj = {};
  for(let i = 0; i < N; i++){
    let num = arr[i];
    if(obj[num]){
      obj[num]++;
    } else{
      obj[num] = 1;
    }
  }
  let maximum = -Infinity;
  for(let i in obj){
    if(obj[i] > maximum){
      maximum = obj[i];
    }
  }
  let count = 0;
  for(let i in obj){
    if(obj[i] === maximum){
      count++;
    }
  }
  if(count === 1){
    console.log("YES");
  }else{
    console.log("NO");
  }
}
checkDominatingArray(5, [1, 2, 3, 3, 3]);
checkDominatingArray(5, [1, 2, 3, 2, 3]);