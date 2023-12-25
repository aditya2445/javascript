//var should be avoided in programming using js
if(true){
    let a=10;
    var b=20;
}
// console.log(a);//error
// console.log(b);//20

function one(){
    const username="aditya"
    function two(){
        const website="youtube"
        console.log(username);
    }
    two()
}
one();//aditya

//********************************************************/Interesting
console.log(addOne(5));//it gives no error o/p->6
function addOne(num){
    return num+1;
}

// addTwo(6)//it gives you an error
const addTwo=function(num){
    return num+2
}
//addTwo(6)//declaring here will not give you any error
console.log(addTwo(6))//o/p=>8