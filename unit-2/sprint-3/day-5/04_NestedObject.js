function spreadOperatorUse(profile, updates){
  
    return {...profile, ...updates, address: {...profile.address, ...updates.address}};
  }
  
  let profile = {name: "Charlie", age: 29, address: {city: "San Fransisco", zipcode: 94101}};
  let updates = {age: 30, address: {zipcode: 94109, country: "USA"}};
  
  console.log(spreadOperatorUse(profile, updates));