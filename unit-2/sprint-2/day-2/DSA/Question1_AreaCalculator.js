function areaOfTriangle(base, height){
    if(base === 0 || height === 0){
        return 0.0;
    }
    if(base < 0 || height < 0){
       return "Invalid number, base and height must be positive numbers.";
    }
    
    let area = base * height / 2;
    return area.toFixed(1);
}
console.log(areaOfTriangle(10, 5));
console.log(areaOfTriangle(0, 15));
console.log(areaOfTriangle(8, 0));
console.log(areaOfTriangle(10, -5));
console.log(areaOfTriangle(-10, 5));