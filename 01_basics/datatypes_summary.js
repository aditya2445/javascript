//primitive

//7 types: String,Number,Boolean,null,undefined,symbol,BigInt

// Do Reasearch whether JS is a static  or dynamic language?
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
//here are some examples of variable declaration

const score=10;
const score_val=10.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail=undefined;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id);//Symbol(123)
// console.log(anotherId);//Symbol(123)
// console.log(id==anotherId);//false
// console.log(id===anotherId);//false

const bigNumber=3354636377878797773n//BigInt


//Reference type(Non Primitive)

//Arrays,Objects,Functions

const heros=["aloo","paneer","matar"] //Array Example

let myObj={
    name:'aditya',
    age:18,
}

const myFunction=function(){
    console.log("Hello Function");
}

// console.log(typeof(bigNumber));

//NOTE : NULL is an object type
//Assignment:https://262.ecma-international.org/5.1/#sec-11.4.3...


// ****************************************************************
//Stack(primitive)  Heap (non primitive)

let myYtName="Aditya.com"

let anotherName="AdityaVlogsDaily"
anotherName="Adityaaaa"//a copy is created and any changes in the variable will reflect in the copy notr in the original ones 

console.log(anotherName);
console.log(myYtName);

let user1={
    email:"user@123.com",
    upi:"user@ybl"
}

let user2=user1;//actual user1 is passed now changes in user2 will reflect in the user1 also

user2.email="adi@goog.com"
console.log(user1.email);//Both are same i.e, adi@goog.com
console.log(user2.email);
