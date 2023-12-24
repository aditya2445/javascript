const name="Aditya"
const marks=100

// console.log(name+ marks +" marks");//Aditya 100 marks but this system is outdated

//current scenario of adding strings with variables is:
console.log(`Hello my name is ${name} and my marks are ${marks}`);

//Method 2 of string declaration...
const gameName=new String("Aditya-hc")
// console.log(gameName);//[String: 'Adityahc]
// console.log(typeof(gameName));//object
// console.log(gameName.__proto__);//{}

//Going Through the props of string
// console.log(gameName.length);//9
// console.log(gameName.toLowerCase());//lower case conversion
// console.log(gameName.toUpperCase());//upper case conversion
// console.log(gameName.charAt(3));//t
// console.log(gameName.indexOf('t'));//3

const newString=gameName.substring(0,4);//(inclusive,exclusive)//it ignores the negative values and starts from 0
// console.log(newString);//Adit

const anotherString=gameName.slice(-6,4);
// console.log(anotherString);//t

const newStringOne="   Aditya   "
// newStringOne=newStringOne.trim();//Not Allowed since its a const
console.log(newStringOne);//    Aditya     
console.log(newStringOne.trim());//Aditya

//Assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url="https://aditya.com/aditya%20mohaty"
// console.log(url.replace('%20','-'));//replaces %20 as - in url
// console.log(url.includes("adi"));//true
// console.log(url.includes("ahah"));//false

console.log(gameName.split('-'));//it gives an array separated gameName from -
