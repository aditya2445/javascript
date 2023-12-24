const score=400;//implicit declaration of Numeric type

const balance = new Number(400);
// console.log(typeof balance);//object
 let newBalance=balance;
//  console.log(newBalance==balance);
//  newBalance=new Number(400);
//  console.log(typeof newBalance);//object
//  console.log(balance===newBalance);//false
//  console.log(newBalance);//[Number :400]
//  console.log(balance);//[Number :400]

// console.log(balance.toString());//400 but its of type string
// console.log(balance.toFixed(2));//400.00


const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3));//23.9 and it returns a string

const hundreds=1000000;
// console.log(hundreds.toLocaleString());//it gives the value with commas in us standard
// console.log(hundreds.toLocaleString('en-IN'));//it gives the value with commas in indian standard

// console.log(Number.MAX_VALUE);//it returns the max value of Number
//Assignment go through all the constructors available with Number in browser or mdn docs

// ***********************************************  MATHS  **********************************************************
// console.log(Math.abs(-4));//4
//Math.round,.ceil,.floor etc..
// console.log(Math.min(2,5,3,1));//1
console.log(Math.random());//return a value between 0 and 1.
console.log(Math.random()*10);//returns a values between 0 and 10.

//Generl formula
const min=10,max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

