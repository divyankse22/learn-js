const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() =>{ 
    console.log("task is done");
    resolve();
    },1000);
})
promiseOne.then(function(){
    console.log("Promise is Consumed...");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task2 is completed");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 is also consumed...");
})

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 3 is completed");
        resolve({username: "Divyank", password : "123"});
    },1000);

})

promiseThree.then(function(user){
    console.log(user.username);
    console.log(user.password);    
    console.log("Promise 3 is consumed...");
    
})

const promiseFour = new Promise(function(resolve,reject){
    let error = true;
    setTimeout(function(){
        if(!error){
            resolve({username: "Divyank", password : "123"});
        }
        else{
            reject("Something went wrong :-( ");
        }
    },1000)
})
promiseFour
.then(function(user){
    return user.username;
})
.then((username)=> console.log(username))
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve,reject){
    let error = true;
    setTimeout(function(){
        if(!error){
            resolve({username: "Divyank", password : "123"});
        }
        else{
            reject("Something went wrong :-( ");
        }
    },1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getUser(){
//     try{
//         const response = await fetch("https://jsonplaceholder.org/posts/1")
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("error is present");
//     }
// }
// getUser()

fetch("https://jsonplaceholder.org/posts/1")
.then(function(response){ return response.json()})
.then(function(data){console.log(data)})
.catch((error)=>{
    console.log(error);
})
