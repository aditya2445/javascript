const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){  //callback dont have names
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }//function declaration

// coding.forEach(printMe)//function passing as an arguement do not execute the function here just pass it here.

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);//item is the values at indices 
                                    //index is the indices
                                    //arr is the array coding
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )