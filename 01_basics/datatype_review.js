// primitive
// 7 types : String, null, Number, Boolean, Bigint, undefined, Symbol
const id = Symbol('1234');
const nid = Symbol('1234');
console.log(id==nid);
console.log(id===nid);
//BigInt example:
let ds = 126372814596517348n
// Reference(Non Primitive)
// Arrays, Functions, Objects
const myFunction = function(){
    console.log("Hello World");
}
const fruits = { 1: "Mango", 2: "Apple", 3: "Banana" };
const nums = [1,3,65,8765,98]
console.log(typeof myFunction);
console.log(typeof fruits);
console.log(typeof nums);