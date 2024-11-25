//********** Palindrome using Two pointer technique **********

let s = "racecara";

function isPalindrome(str){
    let left = 0;
    let right = str.length-1;
    let flag = true;

    while(left < right){
        if(s[left] !== s[right]){
            flag = false;
            break;
        } else {
            left++;
            right--;
        }
    }
    if(flag){
        console.log("Palindrome");
    } else{
        console.log("Not palindrome");
    }
    
}
isPalindrome(s);