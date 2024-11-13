const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map function is used to perform some task and return back to different array
let myArray = myNumbers.map((item)=> item*10).map((num)=> num+1).filter((number)=> number>40)
// like this we can append several function together and return back the array
console.log(myArray);
