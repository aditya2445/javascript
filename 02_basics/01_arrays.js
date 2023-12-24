//array

const myArr=[0,1,2,3,4,5]//it may contain similar data or may contain dissimilar data
const heros=["ironman","thor"]//method 2 of declaring an array
const myarr2=new Array(1,2,3,4);//method 3 of declaring an array

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

//Array Methods

// myArr.push(6)//similar to stack push
// console.log(myArr);
// myArr.pop();//similar to stack pop
// console.log(myArr);


// myArr.unshift(9);//it will insert the element at the starting of the array
// myArr.shift();//removes element from the starting of the array
// console.log(myArr);

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(9));//-1

const newArr=myArr.join();
// console.log(myArr);
// console.log(newArr);//it prints 0,1,2,3,4,5 in string format and when you check its type it will give you string type

//slice and splice

console.log("a",myArr);
const myn1=myArr.slice(1,3);//(inclusive,exclusive)

console.log(myn1);
console.log("b",myArr);

const myn2=myArr.splice(1,3);//(inclusive,inclusive)
console.log(myn2);
console.log("c",myArr);

// difference between slice and splice are in slice the right limit is exclusive but in splice the right limit is inclusive 
//slice does not modifies the original array but splice modifies the original array


