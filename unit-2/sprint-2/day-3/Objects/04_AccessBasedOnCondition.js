// If value is string then only print the key and value

let student = {
    name : "Samwell",
    age : 22,
    grade: "A",
    isGraduate : true
}
for(let key in student){
    if(typeof student[key] === "string" ){
        console.log(key, student[key])
    }
}