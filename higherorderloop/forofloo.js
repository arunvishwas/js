//for of
[{},{}] //objects in array

const arr =[1,2,3,4,5];
//for(variable variable_name of array_name)
for(let num of arr){
console.log(num);

}  


//for use in strings
 const name="arun vishwas";
 for(let nam of name){

  console.log(`${nam}`);

 }


 //maps in javascript
 //maps is type of object 
 //it have key value pair

 const map = new Map()
 map.set('IN' , 'India');
 map.set('USA','United States of America');
 map.set('Fr','France');
 for(let key of map)
{

console.log(key);

}


 for(const [key] of map){ //need to squre bracket on key 

    console.log(key);
 }

 for(const [key,value]of map){

    console.log(key,value);// for both value
 }

 //object iteration 
