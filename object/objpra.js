//object literals for making object
var car1={
name:"honda",
age:90,
pro:"bike"
}


console.log(car1['name'],car1['age'],car1['pro']);//access by square bracket
console.log(car1.name,car1.age); //access by dot notation 

//create a new value pair in existing object by using this
car1.color="red";

//to modify the existing object
car1.name="Hyudai"

console.log(car1);

//object creating by using new keyword

// var MyDetails = {

// name:"arun",
// title:"Engineer in Biu",
// expertise:["sql","javascript","html"],
// follwoers:5000,


// }

//by using new object same string will be create 
var MyDetailss= new Object();
  MyDetailss.name="arun";
  MyDetailss.age="29";
  MyDetailss.car=["toyota","Mercedis Benz"];
  MyDetailss.greetme =  function(){

    console.log("hello function in object");
  }


  console.log(MyDetailss);
  console.log(MyDetailss.greetme());


//by using an object by constructor

function course (instructor,title,fees)
{

this.a=instructor;
this.b=title;
this.c=fees;

};

var javacourse = new course(
"arun","Vishwas",5000,

)

var javas = new course(
  "Harshad","Mehta",15000,
  
  )

  delete course.instructor;
console.log(javacourse,javas);



