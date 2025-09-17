// console.log("hello");
// alert("this is alert message");
// console.error("this is error");
// document.write("document message");


//variable
//redeclaration and redefine both is allow
// let a=20;//local
// console.log(b+"before declaration");
// var b="IT-E";// global scope
// console.log(b+"after first declaration");
// const pi=3.14;
// console.log(a+" "+b+" "+pi);
// var b=4;
// console.log(b+"after second declaration");



//let
//redfine is allow but redeclaration is not allowed
// console.log(username);//this will give error because before initialize not possible it is compulsory to define variable first
// let username="xyz";
// console.log(username);
// username="abc";
// console.log(username);



//const
//it must be compulsory to define a value of const 
// const c=9;



//data type---->string
// let firstName="jyoti";
// let secondName="singh";
// let message="hello";
// let concatenatedString=message+" ,"+firstName+" "+secondName;
// document.write(concatenatedString);




// let ans=2+"2";
// console.log(ans,typeof(ans));//22 string
// console.log(type);//string


//data type---boolean
//true or false


// const student={
//     firstName:"jyoti",
//     lastName:"singh",
//     rollNo:1
// }
// console.log(typeof(student))//object



//type conversion---implicit and explicit

//implicit--automatic use
//string -----> number
// let sub="20"-10;
// console.log(sub+" type of sub: "+typeof(sub));// 10 type of sub: number



//boolean ----> string
// const output=true+"true";
// console.log(output+"typeof()" +typeof(output));//truetrue typeof() string
// const input=true-"true";
// console.log(input);//Nan ehich is ddefine for not a number


//number---->boolean
// let num=1;// if i will give num=0 then else part excute
// if(num){
//     console.log("true part"); //true part
// }
// else{
//     console.log("false part");
// }


//explicit type conversion
//number to string
// let numToStr=String(12345);
// console.log(numToStr);
// let StrToNumber=Number(12345);
// console.log(StrToNumber+typeof(StrToNumber));


//    *
//   ***
//  *****
// *******
// void print(int n){
//     for(int i=0;i<n;i++){
//         //space
//         for(int j=0;j<n-i-1;j++){
//             cout<<" ";
//         }
//         //star
//         for(int j=0;j<2*i+1;j++){
//             cout<<"*";
//         }
//         //space
//         for(int j=0;j<n-i-1;j++){
//             cout<<" ";
//         }
//         cout<<endl;
//     }
    
// }



console.log(fun);
console.log(fun());
function fun(){
    console.log(name);
    var name="jyoti";
    name="singh";
    console.log(name);
    return name;
}
console.log(fun(),"from initiaition");


