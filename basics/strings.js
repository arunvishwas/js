// concatenate by using + sign

 const Name="arun Vishwas";
 const Father="Amar Viswas";
  
 console.log(Name + Father);


 //imp - concatenate by using backticks ` ` and ${variable_name}

 console.log(`My name is ${Name.toUpperCase()} My Father Name is ${Father}`);

 //you can also apply some function also it called string interpolation
 
  // new rule to decalre a string
  const gameName = new String ('Arun Vishwas-great');
 
  console.log(typeof gameName); //object type is give key value type string 
   
  console.log(gameName[0]); // key pair access oupt is first letter of the string A

 console.log(gameName.__proto__); // for object access
  console.log(gameName.toLowerCase()); //for small case in strings
  console.log(gameName.charAt(2)); //find the character at the position 
  console.log(gameName.indexOf('a')) //find the character's position giving the index number

const newstring = gameName.substring(0,4) //first index number and n-1 last number of index and find the 
    //   a-0,r-1,u-2,n-3 strings
 
console.log(newstring);

console.log(gameName.slice(2,3));//use for substring and it value is - to +;

const space = "  arun vishwas   jhkhkjh ";
 console.log(space.trim())//it remove the space from starting of strng and ending of string
  
 const replavce = "arun vishwas";
 console.log(replavce.replace(' ',''));
 





