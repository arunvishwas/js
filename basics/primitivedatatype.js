//primitive datatype: only give the copy of data not the memory address
//7 types: string, Number, Boolean, null, undefined, symbol, Bigint

//reference type (non primitive)

//Array, Objects, Functions

//Javascript 
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100;
const scoreVal=100.1;
const isloggedIn=false;
const outsidetemp=null; //dataype is object 
let userEmail = undefined; //you can also define it manually
const id=Symbol('123');
const anotherId=Symbol('123');
//two symbol value never be same


// array and object
const heros =["shaktiman","naagraj","doga"];
//object in always {} it have key value pair
let myObj ={
name:"hitesh",
age:22,

}
 //function

 //function(){}
//function declare using variable
 const myFunction=function()
 {
console.log("hello World");
 }

console.log(typeof myFunction);
 
 