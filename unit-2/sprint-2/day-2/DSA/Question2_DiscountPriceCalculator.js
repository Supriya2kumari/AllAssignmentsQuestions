function discountPriceCalculator(price){
    if (price === 20){
      return 20;
    }
    if(price < 0) {
      return "Invalid Price, the price must be a non-negative number."
    }
    if(price < 20){
      return `he final price of the item is: ${price}`
    }
    if(price > 20){
      let originalPrice = price - ((price * 10)/100);
      return originalPrice;
    }
  }
  
  console.log(discountPriceCalculator(25))
  console.log(discountPriceCalculator(20))
  console.log(discountPriceCalculator(15))