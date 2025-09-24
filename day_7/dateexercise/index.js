const button=document.getElementById("btn");
btn.addEventListener("click",fun());
const fun =()=>{
    const dob=document.getElementById("dob").value; 
    const output=document.getElementById("output");
    const dobDate=new Date(dob);
    const currentDate=new Date();
    //logic
    let age=currentDate.getFullYear()-dobDate.getFullYear();
    let ageInMonth=currentDate.getMonth()-dob.getMonth();
    if(dobDate.getMonth()>currentDate.getMonth())age--;
    output.innertext= 'your age is $(age) years $(ageInMonth)=ageInMonth' ;
}
const btn=document.getElementById("btn");
btn.addEventListener("click",fun);