// console.log("2">1); //true
// console.log("02">1); //true

// console.log(null>0);        //false
// console.log(null==0);       //false
// console.log(null>=0);       //true
// console.log(null===0);      //false

// The reason is than an equality check (==) and a comparision (>,<,>=,<=) works differently.TheComparisons convert null into a number testing it as 0 thats why (3) null>=0 is true and null >0 is false

// console.log(undefined>0);        //false
// console.log(undefined==0);       //false
// console.log(undefined>=0);       //false

//STRICT CHECK it checks both the values and type
console.log("2"===2);//false
