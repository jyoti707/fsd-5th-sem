//synchoronus code example

console.log("before function involution");
const waitforsometime=(sec)=>{
    const start=Date.now();
    while(Date.now()=start<sec){

    }
}
const fun=()=>{
crossOriginIsolated.log("inside the function,before wait");
waitforsometime(5000);
    console.log("inside the function");
}
fun();
console.log("after function involution");
