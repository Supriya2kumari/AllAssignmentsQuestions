function frequency(n,str){
    let frequency = {};
    for(let i = 0; i < n; i++){
      let char = str[i];
      if(frequency[char]){
        frequency[char]++;
      } else{
        frequency[char] = 1;
      }
    }
    
    let lowest = Infinity;
    for(let key in  frequency){
      if(frequency[key] < lowest){
        lowest = frequency[key];
      }
    }
    let firstAlphabet = null;
    for(let key in frequency){
      if(lowest === frequency[key]){
        if(firstAlphabet === null || key < firstAlphabet){
          firstAlphabet = key;
        }
      }
    }
    console.log(firstAlphabet);
}
frequency(5, "abcba");