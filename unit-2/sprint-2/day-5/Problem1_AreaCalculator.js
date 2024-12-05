function areaOfTriangle(base, height){
    // Check if base or height any one of is 0, it returns 0.0  
    if(base === 0 || height === 0){
        return 0.0;
    } 
    //check if any one is negative , return Invalid numbers
    if(base < 0 || height < 0){
        return "Invalid number, base and height must be positive numbers."
    } 
    //Calculate area of the triangle, and return value round with one floating point
    let area = (base * height) / 2;
    return area.toFixed(1);
}

console.log(areaOfTriangle(10, 5));
console.log(areaOfTriangle(0, 15));
console.log(areaOfTriangle(8, 0));