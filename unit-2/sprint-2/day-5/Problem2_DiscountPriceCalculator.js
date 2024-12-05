function discountPriceCalculator(price){
    //if price is 20, no dicount 
    if (price === 20){
        return `No discount applied`;
    }
    //if price is negative, retutn invalid price
    if(price < 0){
        return `Invalid price , the price must be a non-negative number.`;
    }
    //if price is less than 20, no discount apply return same 
    if(price < 20){
      return `he final price of the item is: ${price}`
    }
    //if price is greater than 20, applied 10% discount 
    if(price > 20){
      let originalPrice = price - (price * 0.1);
      return `The final price of the item is ${originalPrice}`;    }
  }
  
  console.log(discountPriceCalculator(25))
  console.log(discountPriceCalculator(20))
  console.log(discountPriceCalculator(15))