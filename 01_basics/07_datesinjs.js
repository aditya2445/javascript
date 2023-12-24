let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23,5,3,30);//0=> january and 11=> december
let myCreatedDate=new Date("2023-01-12")//in string format we have to give january as 01
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp);//returns in milliseconds since jan 1 1990 to till now
// console.log(myCreatedDate.getTime());//return in milliseconds

// console.log(Math.floor(Date.now()/1000));//returns in seconds


let newDate=new Date();
// console.log(newDate.getMonth());//returns 11 in december because month starts with 0-indexing

newDate.toLocaleString('',{
    weekday: "long"


})//read more about this in mdn docs

