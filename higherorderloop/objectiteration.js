const obj1={
    game1:"Takken",
    game2:"spiderman",
    game3:"gta5"
}
//it iterate by for in loop
for(let key in obj1)
{

    console.log(`${key} :- ${obj1[key]}`); //${obj[key]} using for value of object
}

//for in loop in array

const a = ["arun","harry","hitesh","YahooBaba"];
for(let num in a)
{ 
    console.log(num); //for keys 
    console.log(a[num]); // for values
}


//for each loop
const coding =["Javascript","Ruby","Java","Swift","Python"]

coding.forEach(function (item) { //it back only values

console.log(item);

})

//forecah inner function is item as parameter and function have not any name because 
//it is a call back function 

coding.forEach((item)=>{
 console.log(item)



}
)

// function direct
function printMe(item){

    console.log(item)
}

coding.forEach(printMe); // only give the reference


//for each has many parameter
coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})

//for each loop use in array in object
//important most important

const myCoding =[
{
lanugaeName:"javascript",
languageFileName:"Js"

},
{
    lanugaeName:"Python",
    languageFileName:"Py"
    
    },

    {
        lanugaeName:"Ruby",
        languageFileName:"Ry"
        
        }
        
]

myCoding.forEach((item)=>{
console.log(item.lanugaeName,item.languageFileName);
})