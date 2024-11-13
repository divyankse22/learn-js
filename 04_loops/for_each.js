// forEach --> to perform some operation using a callback function on Arrays
//["" "" ""]
//[{}{}{}]
const coding = ["js", "ruby", "java", "python", "cpp"]
// const value = coding.forEach( function(val){
//     console.log(val);
// });
// console.log(value); // forEach does not return anything 

// coding.forEach((item,idx,array)=>{
//     console.log(item,idx,array);
// })// it is also one of the default form of printing in such a way

const myCourse = [
    {
        languageName : "javaScript",
        price : 1999
    },
    {
        languageName: "java",
        price : 4999
    },
    {
        languageName: "python",
        price : 999
    },
];
myCourse.forEach((item) => {
    console.log(item.languageName);
})