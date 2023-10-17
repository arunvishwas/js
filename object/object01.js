 //object literals
 const mySym =Symbol("key1")
 const JsUser = {
        name:"Hitesh",
        //key value is string type 
        age:18,
        [mySym]:"mykey1",//symbol data tyoe and declaration must be decalre in any where 
        //if you want to use in object 
        Location:"Jaipur",
        isLoggedIn:false,
        LastLogindays:["Monday","Saturday"]

 }


 //access object
 console.log(JsUser.Location);
 console.log(JsUser["Location"]); //give key object in the string form
 console.log(JsUser[mySym]); // access a symbol type value
  