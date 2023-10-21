//this variable not use in function
function thisinfunc() {

//console.log(this);
let username = "hitesh";
//console.log(this.username); //we cannot access the variable by this in the function


}

//console.log(thisinfunc());


// arrow function declaration

const chai = () => {


let username="hitesh";

//console.log(this); //output is {}
//console.log(this.username) //output is indefined
  
}
   //chai()


console.log(addtwonum(7,9));
console.log(addtwonum1(10,15));


//+++one line arrow function
const addtwonum = (num1,num2) =>  num1+num2 //return keyword not require
const addtwonum1 = (num1,num2) =>  (num1+num2) // both are same
// return a object () nust be use
const twoo =(num1 ,num20) =>({username:"arun"})

console.log(twoo.username);








                      