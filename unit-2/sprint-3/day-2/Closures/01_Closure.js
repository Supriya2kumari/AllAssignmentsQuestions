function outerFunction (){
    let message = "Hello, Masai";
    function innerFunction(){
        console.log(message);
    }
    return innerFunction;
} 

let result = outerFunction();
result();