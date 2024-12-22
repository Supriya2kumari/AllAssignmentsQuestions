//count the number of substrings whoes length is prime

function generateAllSubstring(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let temp = "";
        for(let j = i; j < s.length; j++){
            temp += s[j];
            if(isLengthPrime(temp)){
                count++;
                //console.log(temp);
            }
            //console.log(temp);
        }
    }
    console.log(count);
}

function isLengthPrime(S){
    let n = S.length;
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count++;
        }
    }
    return (count === 2);
    //if(S.length)
}

// let s = "supriya";
let s = "masai";
generateAllSubstring(s);