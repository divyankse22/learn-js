"use strict";
let score = "33";
console.log(typeof score);
let val = Number(score);
console.log(typeof val);
//null -> (type->number) & (value->0)
let var2 = null;
let val2 = Number(var2);
console.log(val2);
console.log(typeof val2);
//undefined -> (type->number) & (value->NaN)
let var3 = undefined;
let val3 = Number(var3);
console.log(val3);
console.log(typeof val3);

let var4 = "33abc"
let val4 = Number(var4);
console.log(var4);
console.log(typeof val4)
//""-> false "divyank"-> true