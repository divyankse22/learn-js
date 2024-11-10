//IIFE ---->> Immediately Invoked Function Expression
(function(){
    console.log("Hey Divyank");
    
})();
(function(){
    console.log("Hey Srivastava");
    
})();
// by default iife needs ; as closing to check the closing scope 
//otherwise it can give error
(()=>{
    console.log("Hey reader, glad to see you!!");
    
})();
((num1,num2)=>{
    console.log("Value is : ", num1+num2);
}) (3,5);
// parameterized iife

(function() {
    value = 9;
    console.log("Safe value is : ",value);
    
})();
//Using IIFE to Avoid Global Scope Pollution
//IIFEs are often used to create a local scope to protect variables from being accessible globally