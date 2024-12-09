// let parent = {
//     land: true,
//     vehical: true,
//     debt: false,
//     randomMethod : function(){
//         console.log("Inheritance works!");
//     }
// }
// let child = Object.create(parent);
// child.watch = "swiss";
// console.log(child);
// child.randomMethod();

// let grandChild = Object.create(child);
// grandChild.ac = true;
// grandChild.randomMethod();
// console.log(grandChild);


// function Animal(name, sound, food, color){
//     this.name = name
//     this.color = color
//     this.sound = sound
//     this.food = food;
// }
// Animal.prototype.vocal = function(sound){
//     console.log("making sound", this.sound);
// }
// Animal.prototype.foods = function(food){
//     console.log("eating", this.food);
// }
// let animalOne = new Animal("Dog", "bark", "roti", "brown");
// let animalTwo = new Animal("Cat", "meow", "milk", "black");
// console.log(animalOne);
// animalOne.vocal();

// console.log(animalTwo);
// animalTwo.foods();

// console.log(animalOne.vocal === animalTwo.vocal);



// let parent = {
//     land: "100"
// }
// let child1 = Object.create(parent);
// let child2 = Object.create(parent);

// console.log(child1.land === child2.land)



function Department(noOfEmployees, employeeData){
    this.noOfEmployees = noOfEmployees
    this.employeeData = employeeData
}
Department.prototype.payOut = function(){
   
}

let depOne = new Department(2, [{id: 1, pay: 1000}, {id: 2, pay: 2000}])