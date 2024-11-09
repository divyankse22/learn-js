function userLoginMessage(userName="divyank"){
    console.log(`Hello ${userName} how are you?`);
}
userLoginMessage("Microsoft")
userLoginMessage()

function displayNumbers(num1,num2,...num3){ //Rest Operator
    console.log(num3);
    
}
displayNumbers(100,200,300,400,500)