const stv3={
    rollno:3,
    name:"xyz"
}
class Student{
    constructor(rollno,name){
        this.rollno=rollno;
        this.name=name;
    }
    greet(){
        return 'Hello $(this.name)';
    }
}
let stv1=new Student(1,"shubh");
let stv2=new Student(2,"jyoti");
console.log(stv1);
console.log(stv2);


