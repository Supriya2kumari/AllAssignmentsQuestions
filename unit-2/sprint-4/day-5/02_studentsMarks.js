function processStudents(students){
    let newStudent = students.filter((student) => {
        return student.marks > 60;
    });

    let sortedStudent = newStudent.sort((a, b) =>{
        return b.marks - a.marks;
    });

    let studentName = sortedStudent.map((student) => {
        return student.name;
    })
   return studentName;
}
let students = [{name: "Alice", marks: 58}, {name: "Bob", marks: 85}, {name: "Charlie", marks: 92}, {name: "David", marks: 45}];
console.log(processStudents(students));