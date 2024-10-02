let a = 5
let b = a
console.log(a);
console.log(b);
b = 10
console.log(a);
console.log(b);
a = 15
console.log(a);
console.log(b);

let obj1 = {
    name : "sanket",
    age : 21
}

let obj2 = obj1
console.log(obj1);
console.log(obj2);

obj2.age = 32
console.log(obj1);
console.log(obj2);