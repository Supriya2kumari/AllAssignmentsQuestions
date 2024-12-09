function sumOfCharacters(s){
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        sum += s[i].charCodeAt()-96;
    }
    console.log(sum);
}
sumOfCharacters("abab");