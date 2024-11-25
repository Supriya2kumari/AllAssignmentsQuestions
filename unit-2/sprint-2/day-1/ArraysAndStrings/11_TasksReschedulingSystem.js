let tasks = ["scrum", "dsa", "csbt", "coding", "assignments"];

for(let i = 0; i < tasks.length-1; i++){
    tasks[i] = tasks[i + 1];
}
tasks[tasks.length-1] = "DLC";

console.log(tasks)