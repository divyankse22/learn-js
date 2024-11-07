//literal form 
const mySymbol = Symbol("DS");
const notMySymbol = Symbol("SD");
const newUser = {
    name : "Divyank Srivastava",
    age : 21,
    [mySymbol] : "Software Engineering", // See how a symbol can be used as a key it must be used in[]
    notMySymbol : "Mechanical Engineering", // otherwise datatype will we detected as string by default
    lastUsed : ["4 PM","2 PM", "11 AM"]
}
newUser.age = 22
console.log(newUser);
Object.freeze(newUser)
newUser.name = "Divya"
console.log(newUser);
//singleton form 
const myUser = new Object();
myUser.name = "Divyank"
myUser.age = 21
myUser.sayHello = function(){
    console.log(`Hello ${myUser.name} !, How are you ?`);
}
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const myObj = Object.assign({},obj1,obj2,obj4)
console.log(myObj);

const obj5 = {...obj1, ...obj2}
console.log(obj5);
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course;
console.log(instructor);
//read about hasOwnProperty 