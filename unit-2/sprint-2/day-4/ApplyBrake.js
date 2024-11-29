// given distance and time, calculate speed by below formula, if speed is greter
// than 40 then print apply "Apply Brake" else print "Keep Going"

let distance = 100;
let time = 2;
let speed = distance / time;

if(speed > 40){
    console.log("Apply Brake");
} else{
    console.log("Keep GOing");
}