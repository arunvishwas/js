
// if(true){
// let a = 10;
// const b = 20;
// var c =30;
// }

// {} it called the scope
// console.log(a); //let is limited(block) scope 

//console.log(b); //const also have the limited(block) scope

// console.log(c); // But var is global access

//nested 

function one(){


    const user="arun";
    
    
function two(){

 const website="www.google.com";
   console.log(user);

}

two();

}
if(true){
const user = "hitesh";
if(user==="hitesh")
{
const website = "youtub";
console.log(user+website);


}

//console.log(website) // we don't access the websit here because the scope 
//is block level scope


}

//console.log() //the scope of a variable in if condition in between the curly bracket block level access



//+++++++++++++++intersting concept ++++++++++++++

function addone(num)
{
 return num+1;
}

const varr = addone(2);
console.log(varr);



//declare a function by variable 

const addtwo = function(num2){


return num2+5;


}

console.log(addtwo(5)); // access 


console.log(addtwo(6)+2) //access
