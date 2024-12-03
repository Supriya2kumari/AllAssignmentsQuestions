let book = {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937};

// Printing in different line
// for(let key in book){
//     console.log(`${key}: ${book[key]}`);
// }


// Printing in same line
let temp = "";
for(let key in book){
    temp += `${key}: ${book[key]}  `
}
console.log(temp);