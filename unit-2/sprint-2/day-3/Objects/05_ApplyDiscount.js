//Aplly some discount

let prices = {
    bread: 2,
    milk: 1.5,
    cheese: 5
};
for(let key in prices){
    prices[key] = prices[key]*0.5;
}
console.log(prices);