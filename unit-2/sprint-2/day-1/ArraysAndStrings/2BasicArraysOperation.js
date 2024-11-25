let animalList = [];
console.log(typeof animalList);

let wildAnimals = ["Elephant", "Tiger", "Fox", "Jaguar", "Snake"];

console.log(wildAnimals[0]);
console.log(wildAnimals[4]);
console.log(wildAnimals[2]);
wildAnimals.push("Hyena");
wildAnimals.unshift("Wolf");

wildAnimals.shift();
wildAnimals.pop();
console.log(wildAnimals);

wildAnimals.pop();
console.log(wildAnimals.length);