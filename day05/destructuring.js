// Rest Operater Vs Spred Operater Must to know
// What is destructuring in Js

// Normal Way 
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 =Math.SQRT2;

// Destruturing started..!

const {PI, E, SQRT2}=Math;  // object destru

console.log(PI);
console.log(E);
console.log(SQRT2);

// 2nd Example
const obj={
    fName:"Musharrf",
    lName:"Sayyad",
    id:122,
    salary:5466635
}
// Normal way 
// const n=obj.fName
// const l=obj.lName
// Destructuring started
const {fName, salary} =obj;
// print here
console.log(fName, salary);

// Array destructuring
// print the value of array without index

const number =[1,2,3,4,5,6,];
console.log(number[0]); // print the value of array with index
const [a,b,c,d,e]=number; // print the value of array without index
const [z,,,,y]=number; // if you should skip some value of array use commas to skip..!
// print Here..!
console.log(e)
