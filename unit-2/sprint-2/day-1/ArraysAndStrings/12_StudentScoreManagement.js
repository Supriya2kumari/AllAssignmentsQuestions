let scores = [89, 67, 78, 93, 45, 58, 88, 90, 84, 37];

let count = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] < 40){
        scores[i] = scores[i]+20;
    }
    if(scores[i] > 90){
        scores[i] = 90; 
    }
    if(scores[i] >= 50){
        count++;
    }
}
console.log("Number of students passed: ", count);
console.log(scores);