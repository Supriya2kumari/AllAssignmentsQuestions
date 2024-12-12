/* print the sum of all the characters, "a" = 1 and all the characters
   value is previous value  plus 1.
   e.g. a = 1, b = 2, c = 3,........, z = 26
   s = "abcd"
   sum = 1 + 2 + 3 + 4 = 10
*/

function sumOfCharacters(s){
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        sum += s[i].charCodeAt()-96;
    }
    console.log(sum);
}
sumOfCharacters("abab");