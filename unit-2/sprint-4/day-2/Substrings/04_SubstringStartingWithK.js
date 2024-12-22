// find the number of substrings starting with the given character 'K'

function generateAllSubstring(s, k){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let temp = "";
        for(let j = i; j < s.length; j++){
            temp += s[j];
            if(startsWithK(temp, k)){
                count++
                //console.log(temp);
            }
            //console.log(temp);
        }
    }
    console.log(count);
}

function startsWithK(s, k){
    return (s[0] === k);
}

let s = "supriya";
let k = 'r';
generateAllSubstring(s, k);