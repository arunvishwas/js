// function declaration
function sayMyName(){

console.log("arun is intelligent");


}

sayMyName(); // call the function by basics method

// two numbers addition by parameter

function addTwoNumber(num1,num2){

console.log(num1+num2);

}

addTwoNumber(5,15);


//function by return value

function addTwoNumbers(num1,num2){

   let result =num1+num2;
   return result;
    }
    

   const result=  addTwoNumbers(20,15);
    console.log(typeof result);
//type of function declaratin and give parameter different types

function loginUserMessage(username){

 return `${username} just logged in`

}

 let resu = loginUserMessage("hitesh");
 console.log( resu);


 //when no agruments give

 function login (name ="Enter Name"){
 if(!name){
  return `${name} your name is`;
}
 }
 console.log(login("arun"))

 console.log(login()) //when no agrument has been passed then use defalut value or if condition








  

    
 