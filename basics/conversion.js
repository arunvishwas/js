let score = "33";
//both are the method to write the typeof without () with ()
console.log(typeof score);
console.log(typeof(score));

let valueinNum=Number(score);
console.log(typeof valueinNum);

//2nd condition
let value = "56abc";

let valuetype=Number(value); //when string have some kind of letter part with numbers
console.log(valuetype); //out-NaN(Not a Number) special type of data when javascript not identify the data type

//https://www.youtube.com/watch?v=xbskqJRggqc

//when null datatype change to number it show the output 0 , it is create confusing because 0 have some value null is nothing

//when data type is undefined when chnage into number it output also NaN

//when data type is boolean and input is true then output is 1 it show the boolean vlaue is true
//when input is string "arun" then output is NaN because string with alphabet cannot be change into number

//boolean conversion

let booleanValue = 1;
let booleanChange = Boolean(booleanValue);
console.log(booleanChange); //output is true 



//string concversion
let i=33;
let strings = String(i);
console.log(typeof strings);