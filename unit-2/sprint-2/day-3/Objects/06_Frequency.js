// Frequency of object

function getCharacterFreq(s){
    let obj = {};
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(obj[char] === undefined){
            obj[char] = 1;
        } else{
            obj[char] = obj[char]+1;
        }
    }
    console.log(obj);
};
let s = "abbccc";
getCharacterFreq(s);