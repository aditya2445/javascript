// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }

    function addTwoNumbers(number1,number2){//parameters
        console.log(number1+number2);
    }

// addTwoNumbers(3,4);//arguements o/p->7
// addTwoNumbers(3,"4");//34
// addTwoNumbers(3,null);//3

function loginUserMessage(username){
    return `${username} just logged in`;
}

const message=loginUserMessage("Aditya");
const message2=loginUserMessage();
console.log(message);//Aditya just logged in
console.log(message2);//undefined just logged in
//if we give some default value in function defination then overriding happens if we pass some explicit parameters or else it will print with the default ones