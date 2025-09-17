// const a=function b(){
//     console.log("print fron b function");
//     return 0;
// }
// console.log(a());
// b();



// create all mathematics operator with the help of arrow function

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
// const power = (a, b) => a ** b;
// console.log("Add:", add(10, 5));
// console.log("Subtract:", subtract(10, 5));
// console.log("Multiply:", multiply(10, 5));
// console.log("Divide:", divide(10, 5));
// console.log("Power:", power(2, 3));




const add=(a,b,c=0)=>{
    return a+b+c;
}
const sum=add(1,2,3);
console.log(sum);


const sub=(a,b,c=0)=>{
    return a-b-c;
}
const subtract=sub(1,2,3);
console.log(subtract);

const mul=(a,b,c=0)=>{
    return a*b*c;
}
const multiply=mul(1,2,3);
console.log(multiply);