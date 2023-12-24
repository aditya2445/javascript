const tinderUser=new Object()//its a singleton object
// const tinderUser={}//its a non singleton object

tinderUser.id="112233"
tinderUser.name="Aditya"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@123.com",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"Mohaty"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);//aditya

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

// const obj3=Object.assign({},obj1,obj2)    
//{} is optional go to object.assign in mdn docs actually assign has(target,source) i.e it copies all the sources into the target if you dont give {} and write obj1,obj2 then target is now obj1 and everything will get copied into obj1 thats why we are giving an empty object which acts as a target.

const obj3={...obj1,...obj2}//most used way to join
// console.log(obj3);

//from database

const users=[
    {
        id:1,
        email:"adi3434@mail.com"
    },
    {
        id:1,
        email:"adi3434@mail.com"
    },
    {
        id:1,
        email:"adi3434@mail.com"
    }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//return an array of keys
// console.log(Object.values(tinderUser));//return an array of values of keys
// console.log(Object.entries(tinderUser));//return an array of [key ,value]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
//Assignment go through some important methods of object by typing the object in console of browser and read the prototype list

const course={
    coursename:"js in hindi",
    price:"$885",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor}=course //destructuring 
console.log(instructor);//hitesh

//later in react we will read
// const navbar=({company})=>{

// }
// navbar(company="hitesh");

// example of an api:https://api.github.com/users/aditya2445









