const user ={
username:"arun vishwas",
price:999,
welcomemessage:function ()
{

console.log(`Welcome ${this.username} on our website `);
// console.log(this); know the current this object by using after this keyword use


}

}


user.welcomemessage(); //access the function value
console.log(user.username); //access the other value 
user.username="Arun by Microsoft"; //change the context this will be changeable
console.log(this) //know the current object use after where you use this keyword
user.welcomemessage();


