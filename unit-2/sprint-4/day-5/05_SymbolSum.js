function sumOfSymbols(str,N){
    let newStr = "";
    for(let i = 0; i < N; i++){
      if(str[i] === '#'){
        newStr += 1;
      } else if(str[i] === '@'){
        newStr += 2;
      } else if(str[i] === '$'){
        newStr += 3;
      }
    }
    let arr = [];
    for(let i = 0; i < newStr.length; i++){
      let el = Number(newStr[i]);
      arr.push(el);
    }
  
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i]
    }
    console.log(sum)
  }
  sumOfSymbols("#$#@$", 5);