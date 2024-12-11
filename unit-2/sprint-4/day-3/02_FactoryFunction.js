//Factory function

function iPhone(model, storage, color){
    return {
        //*** If keys and values are same, then we can use any one of the below given methods ***
        // model: model,
        // storage: storage,
        // color: color,
        model,
        storage,
        color,
        //model, storage, color
        detail: function(){
            return `This iPhone is a ${this.model} with ${this.storage} storage and ${this.color} color`
        },
    };
}
let iPhone1 = iPhone("iPhone13", "32GB", "blue");
let iPhone2 = iPhone("iPhone14", "16GB", "grey");
let iPhone3 = iPhone("iPhone15", "164GB", "purple");
console.log(iPhone1.detail());
console.log(iPhone2.detail());
console.log(iPhone3.detail());