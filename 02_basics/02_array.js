const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);//flash

const all_heros=marvel_heros.concat(dc_heros)//push pushes the values to the original array but concat returns a new array
// console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros]//it does the same work done by the concat but here in spread we can pass more than two arrays but in concat there is a limitation that you can pass only a single array the ... is known as spread operator.

console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);//it will join all array elements with commas

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))

console.log(Array.from({name:"hitesh"})); //output is [] an empty array interesting

let score1=100,score2=200,score3=500;
console.log(Array.of(score1,score2,score3));

let arr=[1,2,5,6,7,2]
// console.log(arr.sort());//it will sort the array in ascending order..
