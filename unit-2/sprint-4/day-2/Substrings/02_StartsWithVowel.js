/* Generate all the substring and print the count of substrings 
   which starts with vowel in the given string "S".
    e.g. s = "supriya"
    s        u         p         r       i       y       a
    su       up        pr        ri      iy      ya
    sup      upr       pri       riy     iya
    supr     upri      priy      riya
    supri    upriy     priya
    supriy   upriya
    supriya

    count = 10
*/

function generateAllSubstring(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let temp = "";
        for(let j = i; j < s.length; j++){
            temp += s[j];
            if(startsWithVowel(temp)){
                count++;
            }
        }
    }
    console.log(count);
}
function startsWithVowel(S){
    return (S[0] === 'a' || S[0] === 'e' || S[0] === 'i' || S[0] === 'o' || S[0] === 'u');
}

let s = "supriya";
generateAllSubstring(s);