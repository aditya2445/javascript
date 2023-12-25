//Immediatly Invoked function expression

//NAMED IIFE
// (function chai(){
//     console.log('DB CONNECTED');
// })()//using normal function

//UNNAMED IIFE
// (()=>{
//     console.log('DB CONNETCTED 2');
// })()//using arrow function

// ()()//1st paranthesis represents the function defination and the second paranthesis represents the execution of the function
//for interview purpose you would say that to avoid global scope pollution we are using the iife model

// (function one() {
//     console.log("DB Connected");
// })();
// //HERE Semicolon is compulsory else it will show error
// (function two(){
//     console.log("DB connected again");
// })()

//IIFE with args
((name)=>{
    console.log(`Hello mr ${name} your DB is succefully connected`);
})("Aditya")

//writing 2 IIFE's the first should be ended with a semicolon 

//js execution involves 2 steps
//1.Global Execution Context 
//2.phases(memory phase and execution phase)

//call stack 
// function one() {
//     console.log("one");
//     two()
// }
// function two() {
//     console.log("two");
//     three()
// }


// function three() {
//     console.log("three");
// }
// one()
// two()
// three()

// NOtes on how a js file executes
//-->Creation of the Global Execution Context:
// When a JavaScript program starts running, it creates the global execution context. This context consists of two phases: the memory phase and the execution phase.

// ➡Memory Phase:
// During the creation phase, the JavaScript engine sets up the global object (which is the window object in a browser environment), the 'this' keyword, and the outer environment reference.
// It also scans through the code and sets up memory space for variables and functions through a process called "hoisting." Variables are set to undefined, and functions are stored in their entirety.

// ➡Execution Phase:
// After the creation phase, the execution phase begins. This is where the actual code is executed line by line.

// ➡Function Execution:
// When a function is called, a new execution context is created for that function. This includes its own memory space for variables and parameters.
// The function goes through its own creation and execution phases.
// After the function finishes executing, its execution context is popped off the call stack.

// ➡Call Stack:
// The call stack is a data structure that keeps track of the execution context of the program. It follows the Last In, First Out (LIFO) principle.
// As functions are called, their execution contexts are added to the top of the call stack.
// When a function completes its execution, its context is removed from the top of the call stack.

// ➡Global Execution Completion:
// Once the global execution context completes, the program finishes its execution.

// 📝Note:  the returned value being passed to the global environment, it's more accurate to say that the returned value is passed to the calling context. If a function is called within another function, the returned value is typically used in the context of the calling function.

// Great video Hitesh sir.
// correct me if something wrong in above text.