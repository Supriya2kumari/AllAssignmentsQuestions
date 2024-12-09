function solve(N,arr){
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