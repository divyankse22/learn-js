let arr = [1,4,"madhavan","dev",45,21,90,87]
arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift("Divyank")
console.log(arr);

arr.shift()
console.log(arr);

//these were basic methods

// now we see other methods
const myn1 = arr.slice(1, 3)
console.log(myn1);
console.log("B ", arr);

const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);