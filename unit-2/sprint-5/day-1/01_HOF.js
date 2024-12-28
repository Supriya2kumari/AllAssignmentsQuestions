// given array of object, products. each has name and price, use map() to create new array name
// and use for each to print product name along with price is less than 50$ or greater that 50$

function processProduct(arr){
    let names = arr.map((ele) => {
        return ele.name;
    });
    console.log(names);

    arr.forEach(ele => {
        if(ele.price > 50){
            console.log(`${ele.name} is above $${ele.price}`);
        }else if(ele.price < 50){
            console.log(`${ele.name} is below $${ele.price}`);
        }
    })
}
 let product = [{name: "Laptop", price: 1000}, {name: "Mouse", price: 20}];
 processProduct(product);