function processStudents(students){
   let name = students.filter((ele) => { return (ele.marks > 60);}).sort((a, b) => { return b.marks - a.marks}).map((ele) => {return ele.name});
   return name;
}
let students = [{name: "Alice", marks: 58}, {name: "Bob", marks: 85}, {name: "Charlie", marks: 92}, {name: "David", marks: 45}];
console.log(processStudents(students));