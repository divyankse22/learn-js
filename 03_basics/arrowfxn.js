const user = {
    username: "Divyank",
    branch : "Software",
    hello : function(){
        console.log(`Hello ${this.username}, Glad to see you`);
        // 'this' function is used to access current context
    }
}
user.hello();
// console.log(this);
// it returns the global execution context which is {}

// const ds = () => {
//     console.log("Hello DS");
// }
// ds()
// the functions can be written like this also

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
// these are methods are used for implicit return

const myName = () => ({username: "DS"})