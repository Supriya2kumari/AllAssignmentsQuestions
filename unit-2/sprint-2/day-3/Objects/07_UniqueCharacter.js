//Finding unique key or non repeating cgaracter

function firstNonRepeatingChar(s){
    let obj = {};
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(obj[char] === undefined){
            obj[char] = 1;
        } else{
            obj[char] = obj[char]+1;
        }
    };
    for(let i in obj){
        if(obj[i] === 1){
            return i;
        } else {
            return null;
        }
    }
}

let s = "swwiiss";
console.log(firstNonRepeatingChar(s));