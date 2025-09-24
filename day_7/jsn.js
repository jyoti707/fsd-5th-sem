const obj={
    rollno:1,
    name:'raj'
}
console.log(typeof(obj));
// const json={
//     "rollno":1,
//     "name":"abc"

// }
const json=JSON.stringify(obj);
console.log(json);
const NEWOBJ=JSON.parse(obj);
console.log(typeof(NEWOBJ));