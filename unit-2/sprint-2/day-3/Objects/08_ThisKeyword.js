//this inside onject's method refer to object it self

let obj = {
    name: "Supriya Kumari",
    age: 40,
    getDetails: function(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
console.log(obj.getDetails());