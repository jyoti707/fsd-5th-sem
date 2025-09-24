//rest parameter with arrow function
const fun=(...args)=>{
    console.log(args);
    let arr=[];
    args.forEach((ele)=>{
        if(ele%2==0) arr.push(ele);
});
return arr;
}
const output=fun(3,4,2,5,6,8,9,10,7);
console.log(output);



