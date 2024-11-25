// palindrome string

let s = "racecar";
function isPlaindrome(str){
    let reverse = "";
    for(let i = s.length-1; i >= 0 ; i--){
        reverse += s[i];
    }
    // if(s === reverse){
    //     console.log("The string is a palindrome");
    // }
    let result = str === reverse ? "The string is a palindrome" : "The string is not palindrome";
    console.log(result);

    // return str === reverse ? "The string is a palindrome" : "The string is not palindrome";
}

isPlaindrome(s);

// console.log(isPlaindrome(s));