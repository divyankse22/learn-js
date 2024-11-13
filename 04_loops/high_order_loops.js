// for of 
//["" "" ""]
//[{}{}{}]
const arr = [1,3,4,6,7]
// for(const num of arr){
//     console.log(num);
// }
const greeting = "hello world"
// for(const greet of greeting){
//     console.log(greet);
// }

//MAP
const myMap = new Map();
myMap.set("js","javascript");
myMap.set("py","python");
myMap.set("cpp","c++");
myMap.set("rb","ruby");

for(const [key,value] of myMap){
    console.log(`Key is ${key} and value is ${value} `);
}

// but unlike maps objects cannot be iterated using for of loop
//it will show type error for the following
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}