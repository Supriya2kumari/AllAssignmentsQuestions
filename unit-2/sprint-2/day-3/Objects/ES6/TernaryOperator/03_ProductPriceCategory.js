let productPriceCategory = (price) => {
    (price >= 1000) ? category = "Expensive" 
    :(price >= 500 && price <= 999) ? category = "Moderate"
    :(price > 0 && price < 500) ? category = "Affordable"
    :(price === 0) ? category = "Free" 
    : category = "Invalid Price"
    return category;
}
console.log(productPriceCategory(750));
console.log(productPriceCategory(0));