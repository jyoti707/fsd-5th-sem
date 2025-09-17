// const a=document.getElementById(num1);
// const b=document.getElementById(num2);

// const c=document.getElementById(num3);
// console.log(a.value);
// console.log(b.value);
// console.log(c.value);

// const add=(a,b,c=0)=>{
//     return a+b+c;
// }
// const sum=add(1,2,3);
// console.log(sum);


// const sub=(a,b,c=0)=>{
//     return a-b-c;
// }
// const subtract=sub(1,2,3);
// console.log(subtract);

// const mul=(a,b,c=1)=>{
//     return a*b*c;
// }
// const multiply=mul(1,2,3);
// console.log(multiply);
// Fetch values from input fields
const getValues = () => {
    const n1 = parseFloat(document.getElementById("num1").value) || 0;
    const n2 = parseFloat(document.getElementById("num2").value) || 0;
    const n3 = parseFloat(document.getElementById("num3").value) || 0;
    return [n1, n2, n3];
};

// Arrow functions
const add = (a, b, c = 0) => a + b + c;
const sub = (a, b, c = 0) => a - b - c;
const mul = (a, b, c = 1) => a * b * c;
const div = (a, b, c = 1) => b !== 0 && c !== 0 ? a / b / c : "Division by zero!";
const mod = (a, b) => b !== 0 ? a % b : "Division by zero!";


const showResult = (text) => {
    document.getElementById("result").innerText = "Result: " + text;
};


function doAdd() {
    let [a, b, c] = getValues();
    showResult(add(a, b, c));
}

function doSub() {
    let [a, b, c] = getValues();
    showResult(sub(a, b, c));
}

function doMul() {
    let [a, b, c] = getValues();
    showResult(mul(a, b, c));
}

function doDiv() {
    let [a, b, c] = getValues();
    showResult(div(a, b, c));
}

function doMod() {
    let [a, b] = getValues(); 
    showResult(mod(a, b));
}
