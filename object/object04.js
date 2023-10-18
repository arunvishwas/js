//object create by  singleton and constructor
  const tinderUser = new Object() //singleton object
   const tinderUser1 ={} //both are same object and value non singleton

  console.log(tinderUser);//it give empty object

  // declare vlaue
  tinderUser.id="123abc";
  tinderUser.name="arun";
  tinderUser.email="arunvishwas96@gmail.com";
  console.log(tinderUser);


  //nested object declaration

  const regular ={
    name:{
student_name:"arun vishwas",
father_name:"amar vishwas",
mother_name:{

daughter:"anjali"
,
daughters:"chutki"


}
    }

}

console.log(regular.name.mother_name);//access the nested 