const car={
    brand:"mahindra",
    year:"2021"
}
console.log(car.brand);
console.log(car.brand);
function changebrand(obj){
    obj.brand="xyz";
}
changebrand(car)
console.log(car.brand);
