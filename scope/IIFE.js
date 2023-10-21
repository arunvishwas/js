//Immediately Invoked Function Expression (IIFE)
//Name IFFE
(function chai(){
//Name IFFE
console.log(`DB CONNECTED`)

}) (); //excution by () some time global scope interact with that so we use 
         //this type of function
         //; end by this semicolumn

//your rap your function into () and you call it by  ()

// this function write in arrow funciton

( () => {

console.log(`DB CONNECTED TWQ`);

}) ();

//you can also end this type of function with ;(semicolumn)

// you can also give parameter argument to this 

( (name/*parameter*/) => {

console.log(`DB CONNECTED THREE ${name}`);

}
) ("arun"/*arguments*/);