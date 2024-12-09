// Write a program that finds whether the given two strings are anagram or not.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

function areAnagram(s1, s2){
    
    let n1 = s1.length;
    let n2 = s2.length;
    if(n1 !== n2){
        console.log(False);
    }
    s1.split("").sort().join("");
    s2.split("").sort.join("");

    if(s1 === s2){
        console.log(True);
    } else{
        console.log("False");
    }
}