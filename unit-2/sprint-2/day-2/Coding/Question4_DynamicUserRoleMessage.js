function generateMessage(user){
    return (user.role === "admin") ? (user.active === true) ? "Admin Access Granted!" : "Admin Access Revoked"
           : (user.role === "user") ? (user.active === true) ? "User Access Granted!" : "User Access Revoked"
           : "Access Denied"
   
}

//user = {name: "Alice", role: "admin", active: false};
//user = user = {name: "Bob", role: "user", active: true};
//console.log(generateMessage(user));

console.log(generateMessage({name: "Alice", role: "admin", active: false}));
console.log(generateMessage({name: "Bob", role: "user", active: true}));