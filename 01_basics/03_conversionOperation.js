// NUMBERCONVERSION(line 2-15)
let score="33aa";
// console.log(typeof(score));

let value=Number(score);
// console.log(typeof(value));
// console.log(value);

//After conversion of string into Number these cases may arise...
//"33"=>33
//"33abc"=> NaN(not a number but if you check the type it will give output as a number)
//if score=true=>1 
//if score =null after coverting to number it will give output as 0...


// BOOLEANCONVERSION(line 16-25)
let isLoggedIn=1;
let boolIsLoggedIn=Boolean(isLoggedIn);

// console.log(boolIsLoggedIn);

//Notes On boolean conversion...
//1=> true ; 0=>false
//""=>false
//"aditya"=>true

// STRINGCONVERSION
let sn=67;
let stringNumber=String(sn);
// console.log(typeof(stringNumber));
// console.log(stringNumber);

//*****************************************  Operations  ***************************************************//
let val=3;
let negval=-val;
// console.log(negval);
//2**3 it means 2 power 3

let str1="Hello"
let str2=" Aditya"
let str3=str1+str2;
// console.log(str3);

// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

// console.log(true);//true
// console.log(+true);//1
// console.log(+"");//0

let num1,num2,num3
num1=num2=num3=2+2

//links to study..
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
