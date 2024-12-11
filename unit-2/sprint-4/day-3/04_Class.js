// class

class IPhone {
    constructor(model, storage, color){
        this.model = model,
        this.storage = storage,
        this.color = color,
        this.getInfo = function(){
          return `This iPhone is a ${model} with ${storage} storage and ${color} color`      
        }
    }
}

let iPhone1 = new IPhone("iPhone13", "32GB", "blue");
let iPhone2 = new IPhone("iPhone14", "16GB", "grey");
let iPhone3 = new IPhone("iPhone15", "164GB", "purple");
console.log(iPhone1.getInfo());
console.log(iPhone2.getInfo());
console.log(iPhone3.getInfo());