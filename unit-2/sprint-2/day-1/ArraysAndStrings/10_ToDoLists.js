// create to-do list tasks with 5 tasks, add new task to the beinning of the list 
// remove last task from the list, then print the tasks to-do lists.

let tasks = ["Meditation", "attend-lectures", "Assignments", "DLC", "Lunch"];

tasks.unshift("Scrum"); // add new task to the beinning of the list
tasks.pop(); // remove last task from the list

console.log(tasks);