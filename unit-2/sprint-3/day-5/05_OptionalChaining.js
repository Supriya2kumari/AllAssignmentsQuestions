function userObject(user){
  
    let {id = "Information not available", profile: {name = "Information not available", address: {city = "Information not available", zipcode = "Information not available"} = {}} = {} } = user ?? {};
    
    return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`
}
    
const user1 = {id: 123, profile: {name: "John Doe", address: {city: "Los Angeles", zipcode: 90001}}};const user = {id: 123, profile: {name: "John Doe", address: {city: "Los Angeles", zipcode: 90001}}};
    
const user2 = {id: 123, profile: {name: "John Doe"}};
    
console.log(userObject(user1));
console.log(userObject(user2));