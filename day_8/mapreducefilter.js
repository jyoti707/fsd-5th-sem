//1)map()-->pura complete array return karega 
//2)reduce-->sum batana hai and it return a value
//3)filter()-->condition deke kuch filter krna ho to
let arr=[2,3,4,5,6];
const mapArr=arr.map((ele)=>ele+2);
console.log(mapArr);
const reduceArr=arr.reduce((acc,ele)=>acc+=ele,0);
console.log(reduceArr);
const filterArr=arr.filter((ele)=>ele%2===0);
console.log("filter array");
console.log(filterArr);
