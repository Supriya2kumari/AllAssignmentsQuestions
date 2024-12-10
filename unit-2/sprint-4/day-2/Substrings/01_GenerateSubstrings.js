/* Generate all the substring and print for the given string "S".
    e.g. s = "supriya"
    s        u         p         r       i       y       a
    su       up        pr        ri      iy      ya
    sup      upr       pri       riy     iya
    supr     upri      priy      riya
    supri    upriy     priya
    supriy   upriya
    supriya
*/
function generateAllSubstring(s){
    for(let i = 0; i < s.length; i++){
        let temp = "";
        for(let j = i; j < s.length; j++){
            temp += s[j];
            console.log(temp);
        }
    }
}
let s = "supriya";
generateAllSubstring(s);