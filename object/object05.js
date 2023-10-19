//merge the object
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
 
const obj3={obj1,obj2} //it merge as the object has a object
//console.log(obj3);

 const obj4 = Object.assign({},obj1,obj2); //give the ({} is the target object) for security
 console.log(obj4);

 //merging by spread operator
 const obj5 ={...obj1,...obj2};
 console.log(obj5);

 //syntax for data come from database in array form

 const users = [
    {
id:1,
email:"hot@mail.com"

    },
    {
        id:2,
        email:"rediff@gmaoil.com"
        
            },
            {
                id:3,
                email:"google@mail.com"
                
                    }
 ]

 
console.log(users[1].email); //arrayname[indexvalue].key (access data base data which is array in object form)
console.log(Object.keys(obj1)); //important //object.keys(objectname); it convert object into array and show the only key
console.log(Object.values(obj1)); //for value
//console.log(Object.enteries(obj1)); //use for both values key and value in array form
 console.log(obj4.hasOwnProperty('2')); //use for asking value is present or not 
