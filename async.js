console.log("before function involution");
const waitforsometime=(sec)=>{
    settimeout(()=>{
        console.log("insdie settimeout function");
    },sec)
}
const asyncUsingSetTimeOut=()=>{
    console.log("inside the function before wait");
    waitforsometime(5000);
    console.log("inside the function");
}
asyncUsingSetTimeOut();
console.log("after function involution");