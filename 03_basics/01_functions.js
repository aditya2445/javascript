// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }

    function addTwoNumbers(number1,number2){//parameters
        // console.log(number1+number2);
    }

// addTwoNumbers(3,4);//arguements o/p->7
// addTwoNumbers(3,"4");//34
// addTwoNumbers(3,null);//3

function loginUserMessage(username){
    return `${username} just logged in`;
}

const message=loginUserMessage("Aditya");
const message2=loginUserMessage();
// console.log(message);//Aditya just logged in
// console.log(message2);//undefined just logged in
//if we give some default value in function defination then overriding happens if we pass some explicit parameters or else it will print with the default ones

function calculateCardPrice(...num1){//... is rest operator and its the spread operator
    return num1
}

// console.log(calculateCardPrice(200,300,500));//o/p->[200,300,500]

const obj={
    name:"Aditya",
    price:"199"
}

function objectHandler(anyObj) {
    // console.log(`username is ${anyObj.name} and price is ${anyObj.price}`);//this operator doesnot works here
}

// objectHandler(obj) method 1 of passig object
// objectHandler({name:"sam",price:"222"});//method 2 of passing an object


const arr=[100,200,300]

function returnSecondValue(getarr){
    return getarr[1]
}

console.log(returnSecondValue(arr));//200