//stack memory & heap memory
//stack memory (primitive type) it access the copy of data  
let name="arunvishwas"; 
let Last_Name="AmarVishwas";

Last_Name="Vishwas";

 console.log(Last_Name);
 console.log(name);

 //heap here on reference the value
 let userOne ={

email:"user@google.com",
upi:"user@ybl",

 }
let userTwo = userOne;


    userTwo.email ="hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);