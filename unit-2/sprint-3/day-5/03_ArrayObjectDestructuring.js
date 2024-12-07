const people = [{name : "Alice", address : {city : "New York", street : {name : "Broadway", number : 123}}},
    {sName : "Bob", address : {city : "Los Angeles", street : {name : "Sunset Boulevard", number : 456}}}];
    
    let result = [];
    
    for(let i = 0; i < people.length; i++){
        let {name, address : {city, street : {sName}}} = people[i];
        result.push(`${name} lives in ${city} on ${sName}`);
    }
    
    console.log(result);