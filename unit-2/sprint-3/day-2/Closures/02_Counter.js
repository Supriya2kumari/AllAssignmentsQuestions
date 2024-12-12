function createCounter (){
    let count = 0;
    return{
        increament: function(){
            count++;
            return count;
        },
        getCount: function(){
            return count;
        }
    };
}
const counter = createCounter();
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.getCount());