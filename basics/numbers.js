//numbers in javascript
const score = 400;
const balance = new Number(100);
console.log(score);
console.log(typeof balance); // in object form number 
console.log(typeof balance.toString()); //convert into string
console.log(balance.toString().length);//to know the length of number or string
let a = "arun";
console.log(a.length);//it counts from 1 
console.log(balance.toFixed(2)); //it give number after decimal value like 100.00
const otherNumber = 23.8986
console.log(otherNumber.toPrecision(3)); // it approx the value 3 means it focus the vslue before decimal
console.log(otherNumber.toLocaleString('en-IN')); //it change the value in indian standard foramt
 //Number.MAX_SAFE_INTEGER value type many function is avaiable in javascript programming
  
 //Maths in javascript
 

  console.log(Math);
  console.log(Math.abs(-4));//abs use of change value negative to positive
  console.log(Math.round(4.6));
  console.log(Math.ceil(4.2)); // it choose top value if number is higher the usual 
  console.log(Math.floor(4.9)); //it take small value 
  console.log(Math.min(3,4,1,8));// it give the minimum value
  console.log(Math.max(5,9,7,8)); // it give the maximum value
   
 
  console.log(Math.random(0)); // it give number between 0-1
  console.log((Math.random()*!0)+1); // to avoid very less value we do it first multiply by 10 and then add +1
  const min =10;
  const max=20;
  console.log(Math.floor(Math.random()*(max-min))+min); //it gives value in two digit 10-20
