// Number decoder , number n is given, if it is divisible by 2 print, two, if divisible 
// by 3 print three, if divisible by both printtwoThree

function numberDecoder(n) {
    for(let i = 1; i <= n; i++){
      if(i % 2 === 0 && i % 3 === 0){
        console.log("TwoThree");
      } else if(i % 2 === 0){
        console.log("Two");
      } else if(i % 3 === 0){
        console.log("Three");
      } else{
        console.log(i);
      }
    }
}
numberDecoder(10);
numberDecoder(6);
numberDecoder(3);
numberDecoder(5);