//browser has a global object named window
const user={
    name:"Aditya",
    price:"223",
    welcomeMeassage:function(){
        console.log(`${this.name},welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMeassage();
// user.name="sam"//it is also known as contexts
// user.welcomeMeassage();

// console.log(this);//returns an empty object
//Important Notes
//Actually backstory is during the initial days of JS the only method to run code is the browser so in browser if you search for this(if not declared inside any object or function i.e,global usge) it will point to a global object which is window but then coders pulled the browser engine out and named it as node,deno etc.. in these server side environments this(if not declared inside any object or function i.e,global usge) means now an empty object... 

// function chai(){
//     let user="Aditya";
//     console.log(this);//it returns a object with lots of key and value pairs
// }

// chai();//undefined
//so 'this' cannot be used inside functions for contexts likewise in objects

//Arrow Function********************************************
// const chai=()=>{
//     const user="Aditya"
//     console.log(this);
// }

// chai()//returns empty object {}

const addTwo=(num1,num2)=>{
    return num1+num2//writing inside curly braces needs a return statement
}

// console.log(addTwo(2,3));//5
// console.log(addTwo());//o/p=>[function: addTwo]

//Implicit return
const a=(n1,n2)=> n1+n2 //during implicit return no need of return statement.

console.log(a(3,4))//7

const b=(n1,n2)=>({name:"Aditya",sum:`${n1+n2}`})//returning an object

console.log(b(3,4));//o/p=> {name:'Aditya,sum:7}