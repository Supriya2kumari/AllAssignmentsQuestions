// Count how many specific character present in a given string

function countChar(str, char){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            count++;
        }
    }
    console.log(count);
}
countChar("Hello world", 'o');