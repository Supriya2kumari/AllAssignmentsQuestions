// object creation

let person = {
    name : "Aman",
    age: 25
};
// console.log(person);

// access object's property

console.log(person.age); // using Dot notation
console.log(person["name"]); //using Bracket notation 

// add properties

person["city"] = "Jaipur";
person.state = "Rajasthan";

// update property
person.age = 30;

// delete property
delete person.state;

console.log(person);