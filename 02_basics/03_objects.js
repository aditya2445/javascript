//singleton if an object made up of constructor then singleton if it is formed from literals then no singleton
//Object.create is used to create an object using constructor...will cover it later

//object literals

const mysym=Symbol("key1")
//add this symbol into the object

const JsUser={
    name:"aditya",
    "fullname":"aditya mohaty",//you cannot access this key using . via method 1 so for this you have to use method 2 of accessing
    [mysym]:"myKey1",//this is actual way of declaring a symbol as a key in the object not mysym:"mykey1"
    age:18,
    location:"jaipur",
    email:"adi@mail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","friday"]
}

// console.log(JsUser.email);//method1 of accessing
// console.log(JsUser["email"]);//method 2 of accessing
// console.log(JsUser[mysym]);//mykey1

JsUser.email="adi@chatai.com"//allowed
// Object.freeze(JsUser)//it prevents the further modification of any data
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}

JsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}

// console.log(JsUser.greeting);//it returns [Function(anonymous)] about this we will discuss later 
console.log(JsUser.greeting());//it prints hello js user 
console.log(JsUser.greetingTwo());//it prints hello js user,aditya 





