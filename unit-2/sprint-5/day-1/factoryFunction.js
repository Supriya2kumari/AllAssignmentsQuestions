function user(name, age){
    let userObj = {};
    userObj.name = name;
    userObj.age = age;

    userObj.detail = function(){
        console.log(`Hey, I am ${this.name}, ${this.age} years old`);
    }

    return userObj;
}
let user1 = user("Alice", 29);
user1.detail();
let user2 = user("Bob", 20);
user2.detail();