function indexOfElement(arr, element){
    let index = arr.indexOf(element);
    return (index === -1) ? "Number not found" : index;
}
console.log(indexOfElement([5, 15, 25, 35, 45], 15));
console.log(indexOfElement([5, 15, 25, 35, 45], 20));