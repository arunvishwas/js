let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); //date type is object
//create date according to you
let mycreatedate = new Date(2023,11,20); // declare date 
console.log(mycreatedate.toDateString()); // to string format 
let mytimestamp = Date.now() //date in milisecond current date
console.log(mytimestamp);  
console.log(mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000)); //milisecond convert into second 
