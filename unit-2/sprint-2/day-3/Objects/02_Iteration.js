// used for in loop to access object's property

let personalDetails = {
    name: "Supriya Kumari",
    age: 30,
    place: "Rajasthan"
};
for(let detail in personalDetails){
    console.log(`${detail}: ${personalDetails[detail]}`);
}