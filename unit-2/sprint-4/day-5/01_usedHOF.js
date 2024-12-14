function processProducts(product){
    let productName = product.map(() => {
        return product.name
    });
    product.forEach(element => {
        if(element.price > 50){
            console.log(`${element.name} is above 50$`);
        }else{
            console.log(`${element.name} is below 50$`);
        }
    });
}
let product = [{name: "Laptop", price: 1000}, {name: "Mouse", price: 20}];
processProducts(product);