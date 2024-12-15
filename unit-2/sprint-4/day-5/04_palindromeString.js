//given a string, check if odd position string is palindrome or not

function oddPositionPalindrome(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(i % 2 === 1){
            newStr += str[i];
        }
    }
    let rev = "";
    for(let i = newStr.length-1; i >= 0; i--){
        rev += newStr[i];
    }
    if(rev === newStr){
        console.log("yes");
    } else{
        console.log("no");
    }
}
oddPositionPalindrome("abcdeb");