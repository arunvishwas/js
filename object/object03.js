const user ={
name:"arun",
father:"amar"
,age:30,
email:"arunvishwas96@gmail.com",


}



user.greeting = function(){

console.log("Hello user");



}


console.log(user.greeting); //only give the function reference
console.log(user.greeting()); // it give the value