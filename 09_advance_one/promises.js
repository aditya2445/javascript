const promiseOne=new Promise(function(resolve,reject){
    //Do a async task..
    //Db calls,cryptography,network
    setTimeout(() => {
       console.log('Async task us completed'); 
       resolve();
    }, 1000);
});//after es6 promises are being treated as an object before that people were using some deault libraries like Q and bluebird.but now-a-days almost every environment is providing their own native promise library
promiseOne.then(function(){
    console.log("Promise Consumed");//to print this line you must have called resolve function in that async call
})//then has direct relation with resolve

//method 2 of using promise i.e,without storing it in any variable.
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved.");
})

const promiseThree=new Promise(function(resolve,reject){{
    setTimeout(() => {
        resolve({user:"Aditya",email:"gulgul.com"});    
    }, 1000);
}})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Aditya",password:"hehehe"})
        }else{
            reject("ERROR something went wrong");
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;//here you cannot print the username by simply storing the whole in a variable
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"js",password:"jjss"})
        }else{
            reject("js went wrong");
        }
    }, 1000);
});
async function consumePromiseFive() {
    // const response=await promiseFive;
    // console.log(response);//this works well if error is false if error is true then there arises a problem to solve that problem we use try and catch
    try {
        const response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

//Experimental..
// Method 1
// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json();//here we use await becaz response.json also takes some time
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUsers(); 
//Method 2
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=> console.log(data))
.catch((error)=>console.log(error))