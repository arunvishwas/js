 const usermail="arunai@mail";
if(usermail){

console.log("find mail");

}
else {
    console.log("mail no find");
}
// in if statement usemail value is consideration is true bacause here we give no comparision value to 
// in if statement so here if it find any value than if statement is run otherwise else statement is run
//if find not any value

const usermails="";
if(usermails){

console.log("find mail");

}
else {
    console.log("mail no find");
}

const usermailss=['chutki'];
if(usermailss){

console.log("find mail");

}
else {
    console.log("mail no find");
}
// flasy vlaue 
// flase , 0 ,-0, BigInT 0n, NULL, undefined, NaN
//truety value
//"0","false", " ", [], {}, function(){}

//check empty array
if(usermailss.length===0){

console.log("array is empty");

}
else {
    console.log("Find something in array");
    
}

const objmath={}

if(Object.keys(objmath).length===0)
{

console.log("object is empty ");

}

//false == 0; output is true 
//false == ''; output is true
//0 == ''; output is true

//+++++ Nullish Coalescing Operator (??); null undefined
//sometime database has send null value or value that case you can use it

let val1;
val1 =5 ?? 10; //the vlaue left side is provide by database and right side is default value
let val2 = null ?? 10; //  null is come from data base in this case it negelected the null value
let val3 = undefined ?? 20; //null is come from data base in this case it negelected the null value

let val4 = null ?? 20 ?? 30; // first balueis assign


 console.log(val1); 
 console.log(val2);  
 console.log(val3);
 console.log(val4);


 //Terniary Operator
 // condition ? true : false  

 const IceTeaPrice =100;
 IceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")

