let arr1 = new Array("Mango","Apple","Banana");
let arr2 = new Array("Kiwi","DragonFruit","Litchi")
let arr3 = new Array("Melon","Watermelon")
// arr1.push(arr2);
// console.log(arr1);
const arr4 = arr1.concat(arr2);
console.log(arr4);
//But we can prefer the following method which is used to join more than one array
const newArr = [...arr1,...arr3,...arr2];
console.log(newArr);
const nums = [1,2,3,[4,5],6,[7,8,[9,10,[11],12],13,14],15];
const singleArr = nums.flat(Infinity);
console.log(singleArr);
console.log(Array.from("DS"))
console.log(Array.from({name: "DS"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
