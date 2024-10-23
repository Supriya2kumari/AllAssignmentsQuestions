function priceCategories(price){
    
    return (price >= 1000) ? "Expensive" : (price >=500 && price <=999) ? "Moderate" : (price < 500 && price > 0) ? "Affordable" : (price === 0) ? "Free" : "Invalid Price";
}

console.log(priceCategories(750));
console.log(priceCategories(0));
console.log(priceCategories(-10));
console.log(priceCategories(1200));
console.log(priceCategories(350));